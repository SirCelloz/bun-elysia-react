import axios from "axios";

export const nc = axios.create({
  baseURL: 'http://localhost:3001/api',
})

export const cn = axios.create({
  baseURL: 'http://localhost:3001/api',
  withCredentials: true
})