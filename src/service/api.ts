import axios from "axios";

const Api = axios.create({
  baseURL: "https://swapi.dev/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default Api;
