import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

export const getLanguages = createAsyncThunk(
  "language/getLanguages",
  async () => {
    const res = await api.get("/getLanguages");

    return res.data.data.languages;
  }
);
export const translateText = createAsyncThunk(
  "translate/translateText",
  async (arg, { getState }) => {
    // Aksiyon içerisinde store abone olmak
    const { translateReducer } = getState();
    console.log(translateReducer);
    const params = new URLSearchParams();
    params.set("source_language", translateReducer.sourceLang.value);
    params.set("target_language", translateReducer.targetLang.value);
    params.set("text", translateReducer.textToTranslate);
    const res = await api.post("/translate", params);

    return res.data.data.translatedText;
  }
);
