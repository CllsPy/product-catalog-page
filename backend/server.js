import express from 'express';
// const express = require('express');

const app = express();

app.get('/api/notes', (req, res) => {
  res.status(200).send("Your Research Your Notes!")
})

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});