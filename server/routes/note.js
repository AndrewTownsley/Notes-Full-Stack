const express = require("express");
const router = express.Router();

const {
    getAllNote,
    postCreateNote,
    completeUpdateNote,
    deleteNote,
} = require("../controllers/note");

router.get("/", getAllNote);

router.post("/", postCreateNote);

router.put("/:id", completeUpdateNote);

router.delete("/:id", deleteNote);

module.exports = router;