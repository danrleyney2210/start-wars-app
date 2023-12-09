import axios from "axios";

const Api = axios.create({
  baseURL: "http://swapi.dev/api",
});

export default Api;
