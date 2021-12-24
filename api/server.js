const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running..");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});

//  method 1 for run port
//app.listen(5000, console.log(`Server running in 5000`));
//  method 2 for run port
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running in  mode on port ${PORT}..`));
