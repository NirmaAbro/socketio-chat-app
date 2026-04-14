import express from "express";
import authRoutes from "../auth/auth.routes.js";
import messageRoutes from "../message/message.routes.js";
import userRoutes from "../user/user.routes.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/message", messageRoutes);
router.use("/user", userRoutes);

export default router;
