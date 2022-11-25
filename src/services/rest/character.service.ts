import axios from "axios";
const url = "https://rickandmortyapi.com/api";

const instance = axios.create({
  baseURL: url,
  timeout: 1000,
});

export const getCharacters = async () => {
  const res = await instance.get("/character");
  return res.data;
};
