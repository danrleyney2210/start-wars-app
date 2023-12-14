import axios from "axios";

const Api = axios.create({
  baseURL: "http://swapi.dev/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default Api;
