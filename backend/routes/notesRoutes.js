import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
    res.status(200).json({"message": "You just fetched the notes!"})
})

router.post("/", (req, res) => {
    res.status(201).json({"message": "Note created sucessfully"})
})

router.put("/:id", (req, res) => {
    res.status(200).json({"message": "Note updated sucessfully"})
})


export default router