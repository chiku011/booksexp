import express from "express";
import { getBook, createBook } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBook);
router.post("/create", createBook);

export default router;