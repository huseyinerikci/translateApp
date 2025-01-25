import { createSlice } from "@reduxjs/toolkit";
import { translateText } from "../actions";

const initialState = {
  sourceLang: { value: "tr", label: "Turkish" },
  targetLang: { value: "en", label: "English" },
  textToTranslate: "",
  translatedText: "",
  isLoading: false,
};

const translateSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setSource: (state, action) => {
      state.sourceLang = action.payload;
    },
    setTarget: (state, action) => {
      state.targetLang = action.payload;
    },
    setText: (state, action) => {
      state.textToTranslate = action.payload;
    },
    swap: (state) => {
      const currSource = state.sourceLang;
      const currTarget = state.targetLang;
      const currText = state.textToTranslate;
      const currTranslate = state.translatedText;

      state.sourceLang = currTarget;
      state.targetLang = currSource;
      state.textToTranslate = currTranslate;
      state.translatedText = currText;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(translateText.pending, (state) => {
      state.isLoading = true;
      state.translatedText = "";
    });
    builder.addCase(translateText.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.translatedText = payload;
    });
    builder.addCase(translateText.rejected, (state, { error }) => {
      state.isLoading = false;
      alert("Bir sorun oluştu, " + error.message);
    });
  },
});
export const { setSource, setTarget, setText, swap } = translateSlice.actions;
export default translateSlice.reducer;
