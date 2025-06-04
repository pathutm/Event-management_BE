const Event = require("../models/event");
const { generateDescription } = require("../services/geminiService");

const createEvent = async (req, res) => {
  console.log("req.body:", req.body);
  console.log("req.file:", req.file);

  try {
    const {
      title,
      venue,
      date,
      time,
      type,
      location,
      costType,
      description,
    } = req.body;

    const image = req.file
      ? {
          data: req.file.buffer,
          contentType: req.file.mimetype,
        }
      : null;

    const event = await Event.create({
      title,
      venue,
      date,
      time,
      type,
      location,
      costType,
      image,
      description,
      createdBy: req.user.userId,
    });

    res.status(201).json(event);
  } catch (err) {
    console.error("Event creation failed:", err.message);
    res.status(500).json({ message: "Event creation failed", error: err.message });
  }
};

const getAllEvents = async (req, res) => {
  const filters = req.query;
  const events = await Event.find(filters);
  res.json(events);
};

const getAdminEvents = async (req, res) => {
  const events = await Event.find({ createdBy: req.user.userId });
  res.json(events);
};

const generateDescriptionHandler = async (req, res) => {
  try {
    const { title, venue, date, type } = req.body;
    const prompt = `Generate a short event description for the following details: Title: ${title}, Venue: ${venue}, Date: ${date}, Type: ${type}`;
    const description = await generateDescription(prompt);
    res.json({ description });
  } catch (err) {
    res.status(500).json({ message: "AI generation failed" });
  }
};

module.exports = {
  createEvent,
  getAllEvents,
  getAdminEvents,
  generateDescription: generateDescriptionHandler,
};
