import axios from "axios"

export const api = axios.create({
  baseURL: "http://127.0.0.1:3333",
  timeout: 700,
  withCredentials: true, // Adicione isso caso precise enviar cookies ou autenticação

})