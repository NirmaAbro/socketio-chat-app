import {
    getAllUsersController,
    getUserController
} from "./user.controller.js";
import express from "express";
import { protect } from "../../middlewares/auth.middleware.js";


const router = express.Router();

router.get("/", protect, getAllUsersController);
router.get("/:id", protect, getUserController);

export default router;