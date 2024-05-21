import axios from "axios";
import * as cheerio from "cheerio";
import { baseUrl } from "../config/baseUrl.config.js";

export async function getMeaning(word) {
  try {
    const { data } = await axios.get(`${baseUrl}/${word}`);
    const $ = cheerio.load(data);
    const meaning = $(".search > .word_info > #w_info > .format1")
      .text()
      .trim()
      .split(";")
      .slice(0, -1)
      .map((part) => part.trim());
    return meaning.length > 0 ? meaning : "No meaning found";
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching meaning");
  }
}
