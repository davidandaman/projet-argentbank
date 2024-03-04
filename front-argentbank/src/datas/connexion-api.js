import axios from "axios";

const Axios = axios.create({
  baseURL: "http://localhost:3001/api/v1/user",
});

export const login = async (credentials) => {
  const request = await Axios.post("/login", credentials);
  return localStorage.setItem("token", request.data.body.token);
};

// Récupération du du token
Axios.interceptors.request.use((request) => {
  let token = localStorage.getItem("token");
  if (token) {
    request.headers.Authorization = "Bearer" + token;
  }
  return request;
});
export default Axios;
