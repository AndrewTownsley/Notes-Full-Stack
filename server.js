const express = require('express')
const connectDB = require("./config/db");
const cors = require("cors");
const compression = require('compression');
const morgan = require('morgan');
const mongoose = require('mongoose');
const router = express.Router();
const path = require('path');
require("dotenv").config({ path: './env'});


const app = express();

const PORT = process.env.PORT || 8000;
app.use(compression({ filter: shouldCompress}));
function shouldCompress (req, res) {
    if (req.headers['x-no-compression']) {
      // don't compress responses with this request header
      return false
    }
  
    // fallback to standard filter function
    return compression.filter(req, res)
  }
app.use(cors({ origin: true, credentials: true}));
app.use(express.json({ extended: false }));
app.use(morgan("dev"));



const note = require("./routes/note"); 
app.use("/api/note", note);

connectDB();

app.use(express.static(path.join(__dirname, './client/build')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client', 'build', 'index.html.gz'))
})
// app.get('/', (req, res) => {
//     res.send("**** Server is Running ****")
// })


// Use Routes...


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})

