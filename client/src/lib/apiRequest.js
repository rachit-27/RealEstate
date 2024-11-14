import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://realestate-avad.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;