const mongoose = require("mongoose");

const participantSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  organisation: String,
});

const Participant = mongoose.model("Participant", participantSchema);

module.exports.Participant = Participant;
