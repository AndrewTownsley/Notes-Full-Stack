const express = require('express')
const connectDB = require("./config/db");
const cors = require("cors");
const morgan = require('morgan');
const mongoose = require('mongoose');
const router = express.Router();
const path = require('path');
require("dotenv").config({ path: './env'});

const app = express();

// Routes...
const note = require("./routes/note"); 

connectDB();
// app.use(express.static(path.resolve(__dirname, "./client/build")));
app.use(cors({ origin: true, credentials: true}));
app.use(morgan("dev"));

    
app.use(express.json({ extended: false }));
app.get('/', (req, res) => {
    res.send("**** Server is Running ****")
})
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
// })

// Use Routes...
app.use("/api/note", note);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})

