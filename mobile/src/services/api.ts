import axios from "axios"

export const api = axios.create({
  baseURL: "http://192.168.1.111:3333",
  timeout: 700,
  withCredentials: true, // Adicione isso caso precise enviar cookies ou autenticação

})