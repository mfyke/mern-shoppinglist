const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require("./routes/api/items");



const app = express();

// use bodyparser middleware
app.use(bodyParser.json());

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/shopping";
const connection = mongoose.connect(MONGODB_URI);

// use routes

app.use(items);

const port = process.env.PORT || 8000;

app.listen(port, ()=> console.log(`server started on port ${port}`));