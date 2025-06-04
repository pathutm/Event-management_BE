const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: String,
    venue: String,
    date: Date,
    time: String,
    type: String,
    location: String,
    costType: String,
    image: {
      data: Buffer,
      contentType: String,
    },
    description: String,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);
