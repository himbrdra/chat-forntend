import axios from "axios";

const userRoute = axios.create({
  baseURL: "http://localhost:5000/api/v1/user",
});

export default userRoute;
