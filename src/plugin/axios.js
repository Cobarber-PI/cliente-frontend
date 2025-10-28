import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://0.0.0.0:19003/api/",
});

export default api;
