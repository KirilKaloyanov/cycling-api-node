const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const participants = require("./routes/participants");

const app = express();
mongoose
  .connect("mongodb://localhost/cycling")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect", err));

app.use(express.json());
app.use(cors());

app.use("/api/participants", participants);

app.listen(3001, () => console.log("Listening on port 3001..."));
