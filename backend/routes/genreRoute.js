import express from "express";
import {getToken, isAuth} from "../auth/authHelper";
import controller from "../controllers/genresController"

const router = express.Router();

router.get("/", controller.findAll)

router.post("/new-genres", controller.createGenre);
router.post("/delete-genre/:id", controller.deleteGenre);

export default router;