import axios from "axios";

const API = axios.create({
  baseURL: "https://mengage-server.herokuapp.com/api",
});

API.interceptors.request.use((req) => {
  if (sessionStorage.getItem("lookUpValue")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(sessionStorage.getItem("lookUpValue")).token
    }`;
  }
  return req;
});

export const getLookupValue = () => API.get("/getLookupValues");
