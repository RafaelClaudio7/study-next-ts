import axios from "axios";

const postsApi = axios.create({
  baseURL: "http://localhost:3333/api",
  headers: {},
});

export { postsApi };
