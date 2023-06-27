import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "bac581cda58c37d3205ed9c7104feb8a",
    language: "pt-BR",
    include_adult: false,
  },
});
