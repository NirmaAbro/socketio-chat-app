import express from "express";
import authRoutes from "../auth/auth.routes.js";
import messageRoutes from "../message/message.routes.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/message", messageRoutes);

export default router;
