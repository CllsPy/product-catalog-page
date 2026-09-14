import Note from "../models/Note.js"


export const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.findx();
        res.status(200).json(notes);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const createNote = (req, res) => {
    res.status(201).json({"message": "Note created sucessfully!"})
}

export const updateNote = (req, res) => {
    res.status(200).json({"message": "Note updated sucessfully"})
}

export const deleteNote = (req, res) => {
    res.status(200).json({"message": "Note deleted sucessfully"})
}