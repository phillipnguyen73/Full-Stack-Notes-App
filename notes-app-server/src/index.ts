import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

// Logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  console.log("Headers:", req.headers);
  if (req.body && Object.keys(req.body).length > 0) {
    console.log("Body:", req.body);
  }
  next();
});

// Get all notes
app.get("/api/notes", async (req, res) => {
  try {
    const notes = await prisma.note.findMany();
    res.json(notes);
  } catch (error) {
    console.error("Error fetching notes:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get a single note by ID
app.get("/api/notes/:id", async (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: "ID must be a valid number" });
  }

  try {
    const note = await prisma.note.findUnique({
      where: { id }
    });
    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.json(note);
  } catch (error) {
    console.error("Error fetching note:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Create a new note
app.post("/api/notes", async (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required" });
  }

  try {
    const note = await prisma.note.create({
      data: { title, content }
    });
    res.json(note);
  } catch (error) {
    console.error("Error creating note:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Update a note
app.put("/api/notes/:id", async (req, res) => {
  const id = Number(req.params.id);
  const { title, content } = req.body;

  if (isNaN(id)) {
    return res.status(400).json({ error: "ID must be a valid number" });
  }

  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required" });
  }

  try {
    const updatedNote = await prisma.note.update({
      where: { id },
      data: { title, content }
    });
    res.json(updatedNote);
  } catch (error) {
    console.error("Error updating note:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Delete a note
app.delete("/api/notes/:id", async (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ error: "ID must be a valid integer" });
  }

  try {
    await prisma.note.delete({
      where: { id }
    });
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting note:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Fallback for unmatched routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Start the server
app.listen(5000, () => {
  console.log("🚀 Server running at http://localhost:5000");
});
