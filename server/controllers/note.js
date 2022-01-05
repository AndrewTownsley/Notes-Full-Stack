const Note = require('../models/note');

exports.getAllNote = (req, res) => {
    Note.find()
        .then((note) => res.json(note))
        .catch((err) => 
            res
                .status(404)
                .json({ message: "Note not found.", error: err.message })
        );
};

exports.postCreateNote = (req, res) => {
    Note.create(req.body)
        .then((data) => res.json({ message: "Note added successfully", data}))
        .catch((err) => 
            res
                .status(400)
                .json({ message: "Failed to add Note.", error: err.message })
        );
};

exports.completeUpdateNote = (req, res) => {
    console.log(req)
    Note.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => res.json({ message: "Note Completed Successfuly", data}))
        .catch((err) => 
            res
                .status(404)
                .json({ message: "Note Failed to Complete.", error: err.message })
        );
};

exports.deleteNote = (req, res) => {
    // console.log(req);
    Note.findByIdAndRemove(req.params.id, req.body)
        .then((data) => res.json({ message: "Note Deleted Successfully", data}))
        .catch((err) => 
            res 
                .status(404)
                .json({ message: "Failed to Delete Note", error: err.message })    
        );
};