import express from 'express';
import * as moviesController from '../controllers/movie.controller.js';

const router = express.Router();

router.post("/movies", moviesController.create);
router.get("/movies", moviesController.list);
router.get("/movies/:id", moviesController.detail);
router.patch("/movies/:id", moviesController.update);
router.delete("/movies/:id", moviesController.remove);

export default router;