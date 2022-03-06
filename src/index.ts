import "reflect-metadata";
import express from "express";
import "./database";
import { route } from "./routes";

const app = express();
const PORT = process.env.PORT || 3300;

app.use(express.json());
app.use(route);

app.listen(3300, () =>
  console.log(`API Server is running on http://localhost:${PORT}`)
);
