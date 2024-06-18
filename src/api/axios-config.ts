import axios from "axios";
import { env } from "../constants/env";

export const axiosInstance = axios.create({
  baseURL: env.API_URL,
  headers: {
    "x-cg-demo-api-key": env.API_KEY,
    accept: "application/json",
  },
});
