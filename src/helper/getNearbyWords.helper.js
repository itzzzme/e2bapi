import axios from "axios";
import * as cheerio from "cheerio";
import { baseUrl } from "../config/baseUrl.config.js";

export async function getNearbyWords(word) {
  try {
    const { data } = await axios.get(`${baseUrl}/${word}`);
    const $ = cheerio.load(data);
    const nearbyWords = [];
    if ($(".search > .suggested").find(".b_s")) {
      $(".search > .suggested > .s_word > a").each((index, element) => {
        const nearbyWord = $(element).find("strong > span").text().trim();
        if (nearbyWord) {
          nearbyWords.push(nearbyWord);
        }
      });
    }
    return nearbyWords.length > 0 ? nearbyWords : "No nearby words found";
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching nearby words");
  }
}
