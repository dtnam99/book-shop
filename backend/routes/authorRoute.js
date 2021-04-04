import express from "express";
import controller from './../controllers/authorController';

const router = express.Router();

router.get("/", controller.findAll);
router.post("/new-author", controller.createAuthor);
router.post("/delete-author/:id", controller.deleteAuthor);

export default router;