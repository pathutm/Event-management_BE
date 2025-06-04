const express = require("express");
const {
  createEvent,
  getAllEvents,
  getAdminEvents,
  generateDescription,
} = require("../controllers/eventController");
const { verifyToken } = require("../middlewares/authMiddleware");
const multer = require("multer");

const storage = multer.memoryStorage(); // keep image in memory buffer
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type. Only jpg, jpeg, png are allowed."));
    }
  },
});

const router = express.Router();

router.post("/create", verifyToken, upload.single("image"), createEvent);
router.get("/", getAllEvents);
router.get("/admin", verifyToken, getAdminEvents);
router.post("/generate-description", verifyToken, generateDescription);

module.exports = router;
