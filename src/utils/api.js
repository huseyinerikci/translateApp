import axios from "axios";

const api = axios.create({
  baseURL: "https://text-translator2.p.rapidapi.com",

  headers: {
    "x-rapidapi-key": import.meta.env.VITE_API_KEY,
    "x-rapidapi-host": import.meta.env.VITE_API_HOST,
  },
});
export default api;
