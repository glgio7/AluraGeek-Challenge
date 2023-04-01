import express from "express";
import "dotenv/config";
import routes from "../routes";
import path from "path";

const app = express();

app.use(express.static(path.join(__dirname, "../client/build")));
app.use(express.json());
app.use(routes);

export default app;
