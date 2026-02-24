
import express from 'express';

import * as movieController from '../controllers/movie.controller.js';

const router = express.Router();

router.post("/movies", movieController.create);

router.get("/movies", movieController.list);

router.get("/movies/:id", movieController.detail);

router.patch("/movies/:id", movieController.update);

router.delete("/movies/:id", movieController.remove);

export default router;