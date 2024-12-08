import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://amazon-api-deploy-la5u.onrender.com",
  // baseURL: "http://127.0.0.1:5001/clone-a881a/us-central1/api",
});

export {axiosInstance}