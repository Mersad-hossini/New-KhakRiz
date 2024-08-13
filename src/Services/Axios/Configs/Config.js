import axios from "axios";

const apiRequests = axios.create({
  baseURL: "https://server.khakrizedarya.ir",
  headers: {
    "Content-Type": "application/json",
  },
});


export default apiRequests;
