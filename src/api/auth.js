import axios from "axios";
const auth = axios.create({
  baseURL: "http://localhost:5000/api/v1/auth/",
});

export default auth;
