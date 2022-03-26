const express = require("express");
const router = express.Router();
const { Participant } = require("../models/participant");

router.post("/", async (req, res) => {
  try {
    let participant = new Participant({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      organisation: req.body.organisation,
    });
    participant = await participant.save();
    res.send(participant);
  } catch (err) {
    res.send(err);
  }
});

router.get("/", async (req, res) => {
  const participants = await Participant.find();
  res.send(participants);
});

module.exports = router;
