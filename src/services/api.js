import axios from "axios";

const api = axios.create({
  baseURL: "https://officialbasetech.azurewebsites.net/api",
});

export default api;