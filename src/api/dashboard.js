import axios from "axios";

const dashboard = axios.create({
  baseURL: "http://localhost:5000/api/v1/dashboard/",
});

const user = JSON.parse(window.localStorage.getItem("user"));
dashboard.defaults.headers.common["Authorization"] = user?.token;
export default dashboard;
