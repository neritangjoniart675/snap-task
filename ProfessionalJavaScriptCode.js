/*
Filename: ProfessionalJavaScriptCode.js

This code demonstrates a complex and sophisticated implementation of a web application that allows users to create, edit, and delete to-do items with various features and functionalities.

Note: The following code is a simplified version and may not include all necessary error handling and validation checks.

*/

// Import necessary libraries and dependencies

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Create an instance of Express
const app = express();

// Set up middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set up static directory for serving static files (e.g., CSS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Set up database connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo_db', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Check database connection status
db.once('open', () => {
  console.log('Connected to the database');
});

// Define a Todo schema
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  status: { type: String, enum: ['pending', 'in-progress', 'completed'] },
  priority: { type: String, enum: ['low', 'medium', 'high'] },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Define a Todo model
const Todo = mongoose.model('Todo', todoSchema);

// Define API routes

// Get all todos
app.get('/api/todos', (req, res) => {
  Todo.find({}, (err, todos) => {
    if (err) {
      console.log(err);
      res.status(500).send('An error occurred while fetching todos');
    } else {
      res.json(todos);
    }
  });
});

// Create a new todo
app.post('/api/todos', (req, res) => {
  const newTodo = new Todo({
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
    priority: req.body.priority,
  });

  newTodo.save((err) => {
    if (err) {
      console.log(err);
      res.status(500).send('An error occurred while creating a new todo');
    } else {
      res.json(newTodo);
    }
  });
});

// Update a todo
app.put('/api/todos/:id', (req, res) => {
  const todoId = req.params.id;

  Todo.findByIdAndUpdate(
    todoId,
    {
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      priority: req.body.priority,
      updatedAt: Date.now(),
    },
    { new: true },
    (err, updatedTodo) => {
      if (err) {
        console.log(err);
        res.status(500).send('An error occurred while updating the todo');
      } else {
        res.json(updatedTodo);
      }
    }
  );
});

// Delete a todo
app.delete('/api/todos/:id', (req, res) => {
  const todoId = req.params.id;

  Todo.findByIdAndRemove(todoId, (err, deletedTodo) => {
    if (err) {
      console.log(err);
      res.status(500).send('An error occurred while deleting the todo');
    } else {
      res.json(deletedTodo);
    }
  });
});

// Set up the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Export app (optional)
module.exports = app;
