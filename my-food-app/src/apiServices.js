import axios from "axios";

const BASE_URL = `http://localhost:3000/foodorders`;

export const api = axios.create({
  baseURL: BASE_URL,
});
