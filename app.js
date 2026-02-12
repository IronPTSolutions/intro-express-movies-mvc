import express from "express";
import morgan from "morgan";
import Movie from "./movies.js";

const app = express();
app.use(express.json());
app.use(morgan("dev"));


if (process.env.NODE_ENV !== "test") {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
}

export default app;
