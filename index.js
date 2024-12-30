const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// In-memory storage for notes
let notes = [];

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Note-Taking App');
});

app.get('/notes', (req, res) => {
  res.json(notes);
});

app.post('/notes', (req, res) => {
  const { title, content } = req.body;
  const newNote = { id: notes.length + 1, title, content };
  notes.push(newNote);
  res.status(201).json(newNote);
});

app.get('/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const note = notes.find(n => n.id === id);
  if (note) {
    res.json(note);
  } else {
    res.status(404).send('Note not found');
  }
});

app.put('/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, content } = req.body;
  const noteIndex = notes.findIndex(n => n.id === id);
  if (noteIndex !== -1) {
    notes[noteIndex] = { ...notes[noteIndex], title, content };
    res.json(notes[noteIndex]);
  } else {
    res.status(404).send('Note not found');
  }
});

app.delete('/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const noteIndex = notes.findIndex(n => n.id === id);
  if (noteIndex !== -1) {
    notes.splice(noteIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Note not found');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Note-taking app listening at http://localhost:${port}`);
});