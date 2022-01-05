const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const NoteSchema = new Schema({
    title: {
        type: String,
        required: false
    },
    text: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        required: false,
        default: false
    },
    category: {
        type: String,
        required: false
    },
    date: {
        type: String,
        required: false
    }

});

const Note = mongoose.model("note", NoteSchema);

module.exports = Note;