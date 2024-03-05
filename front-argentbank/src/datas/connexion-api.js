import axios from "axios";

//Exportation de la fonction asynchrone de connexion (login)
const Axios = axios.create({
  baseURL: "http://localhost:3001/api/v1/user",
});

export const login = async (datasconnect) => {
  const request = await Axios.post("/login", datasconnect);
  return localStorage.setItem("token", request.data.body.token);
};

// Axios modifie les requêtes sortantes, Ajout de l'en-tête d'authentification (token JWT)
Axios.interceptors.request.use((request) => {
  let token = localStorage.getItem("token");
  if (token) {
    request.headers.Authorization = "Bearer " + token;
  }
  return request;
});
export default Axios;
