import express from "express";
import morgan from "morgan";
import "./config/db.config.js";
import router from "./config/routes.config.js";

const app = express();
app.use(morgan("dev"));

app.use(express.json());

app.use('/', router);

app.listen(3000, () => {
  console.log("Ready! on port 3000");
});

export default app;
