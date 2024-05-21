import { getMeaning } from "../helper/getMeaning.helper.js";
import { getNearbyWords } from "../helper/getNearbyWords.helper.js";

export const getResponse = async (req, res) => {
  const { word } = req.params;
  try {
    const meaning = await getMeaning(word);
    const nearbyWords = await getNearbyWords(word);
    res.json({ success: true, results: { word, meaning, nearbyWords } });
  } catch (error) {
    res.status(500).json({ success: false, error: "Error fetching data" });
  }
};
