# Full Stack Notes App

A full-stack PERN (PostgreSQL, Express.js, React, Node.js) notes application using Supabase for database hosting and authentication.  
Users can create, edit, and delete notes with persistent storage.

---

## Features

- User authentication with Supabase
- Create, read, update, delete (CRUD) notes with a RESTful API built using Express.js
- PostgreSQL database hosted on Supabase
- Responsive React frontend with custom CSS styling
- Real-time data updates and secure data management

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- A [Supabase](https://supabase.com/) account and project set up with PostgreSQL and authentication enabled

### Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/phillipnguyen73/Full-Stack-Notes-App.git
   cd Full-Stack-Notes-App

2. Backend setup:

Open a terminal, then run:

bash
Copy
Edit
cd notes-app-server
npm install

3. Frontend setup:

Open a new terminal, then run:

bash
Copy
Edit
cd notes-app-ui
npm install

4. Configuration
Create a .env file in the backend folder (notes-app-server) with your Supabase environment variables:

env
Copy
Edit
SUPABASE_URL=your-supabase-url
SUPABASE_ANON_KEY=your-supabase-anon-key
Important: Do NOT commit your .env file. Make sure it’s included in .gitignore.

You can provide others a .env.example file with this content to show which variables to add:

env
Copy
Edit
SUPABASE_URL=your-supabase-url
SUPABASE_ANON_KEY=your-supabase-anon-key
Running the Application
Start Backend Server
From the notes-app-server folder:

bash
Copy
Edit
npm start
This will run your Express API connected to your Supabase database.

Start Frontend Server
From the notes-app-ui folder:

bash
Copy
Edit
npm start
This will run the React frontend on http://localhost:3000.


