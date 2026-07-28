import express from 'express';
// const express = require('express');

const app = express();

app.get('/api/notes', (req, res) => {
  res.status(200).send("Your Research Your 20 NotessssS!!")
})

app.post('/api/create', (req, res) => {
  res.status(201).json({message:"You created a new note!"})
})

app.put('/api/notes/:id', (req, res) => {
  res.status(201).json({message:"You updated a note!"})
})

app.delete('/api/notes/:id', (req, res) => {
  res.status(201).json({message:"You deleted a note!"})
})

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});