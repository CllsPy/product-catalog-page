import Note from "../models/Note.js";


export async function getNoteById(req, res) {
  try {
    const notes = await Note.findById(req.params.id);
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes");
    res.status(500).json({ message: "internal error server" });
  }
}


export async function getAllNotes(_, res) {
  try {
    const notes = await Note.find().sort({createdAt: -1}); // -1 will sort in desc order (newst first)
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes");
    res.status(500).json({ message: "internal error server" });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });

    const savedNote = await note.save();
    res.status(201).json({ savedNote });
  } catch (error) {
    console.error("Error in createNote");
    res.status(500).json({ message: "internal error server" });
  }
}

export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      {
        title,
        content,
      },
      { new: true },
    );

    res.status(200).json(updatedNote);
  } catch (error) {
    res.status(500).json({ message: "internal error" });
  }
}

export async function deleteNote(req, res) {

    try {
    const { title, content } = req.body;
    const deletedNote = await Note.findByIdAndDelete(
      req.params.id,
      {
        title,
        content,
      },
      { new: true },
    );

    res.status(200).json(deletedNote);
  } catch (error) {
    res.status(500).json({ message: "internal error" });
  }
}

