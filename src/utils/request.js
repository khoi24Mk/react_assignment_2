import axios from "axios";

const request = axios.create({
  baseURL: "https://api.imgflip.com",
});

export default request;
