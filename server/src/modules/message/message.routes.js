import express from "express";
import { sendMessageController, getMessageController } from "./message.controller.js";
import { protect } from "../../middlewares/auth.middleware.js";

const router = express.Router();

// Send message
router.post("/", protect, sendMessageController);

// Get chat history
router.get("/", protect, getMessageController);

export default router;
