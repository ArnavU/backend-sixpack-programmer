import express from "express";
import { getAllUsers, getUserQueries, register } from "../controllers/user.js";

const router = express.Router();

router.get("/all", getAllUsers)

router.post("/new", register)

// accessing queries
router.get("/queries", getUserQueries)

export default router;