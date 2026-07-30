import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send("you just fetched notes")
})

router.post('/', (req, res) => {
  res.status(201).json({message:"You created a new note!"})
})

router.put('/:id', (req, res) => {
  res.status(201).json({message:"You updated a note!"})
})

router.delete('/:id', (req, res) => {
  res.status(201).json({message:"You deleted a note!"})
})


export default router