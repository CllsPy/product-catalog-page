export const getAllNotes = (req, res) => {
    res.status(200).json({"message": "You just fetched the notes!"})
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