const express = require('express')
const connectDB = require("./config/db");
const cors = require("cors");
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');
require("dotenv").config({ path: './env'});


const app = express();

const PORT = process.env.PORT || 8000;

app.use(compression());
app.use(cors({ origin: true, credentials: true}));
app.use(express.json({ extended: false }));
app.use(morgan("dev"));

const note = require("./routes/note"); 
app.use("/api/note", note);

connectDB();

app.use(express.static(path.join(__dirname, './client/build')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client', 'build', 'index.html'))
})
// app.get('/', (req, res) => {
//     res.send("**** Server is Running ****")
// })


// Use Routes...


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})

