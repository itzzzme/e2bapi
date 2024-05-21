import express from "express";
import * as apiController from "../src/controller/api.controller.js";
import { sanitizeParams } from "../src/helper/sanitizer.helper.js";

const port = process.env.PORT || 4444;
const app = express();

app.get('/',(req, res) => {
  res.json("Hello World!");
})

app.get("/api", (req, res) => {
  res.json("English to Bengali dictionary API");
});

app.get("/api/:word", sanitizeParams, async (req, res) => {
  await apiController.getResponse(req, res);
});

app.get("*", (req, res) => {
  res.status(404).json("Bad Request!");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
