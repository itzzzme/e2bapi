import express from "express";
import * as apiController from "../src/controller/api.controller.js";
import { sanitizeParams } from "../src/helper/sanitizer.helper.js";

const app = express();

app.get("/", (req, res) => {
  res.json("English to Bengali dictionary API");
});

app.get("/api/:word", sanitizeParams, async (req, res) => {
  await apiController.getResponse(req, res);
});

app.get("*", (req, res) => {
  res.json("Bad Request!");
});

app.listen(8000, () => {
  console.log("Listening on http://localhost:8000");
});
