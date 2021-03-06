import axios from "axios";

const friend = axios.create({
  baseURL: "http://localhost:5000/api/v1/friend",
});

const user = JSON.parse(window.localStorage.getItem("user"));
friend.defaults.headers.common["Authorization"] = user?.token;
export default friend;
