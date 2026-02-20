import axios from "axios";

const BASE_URL =
  import.meta.env.MODE === "development"
    ? "https://streamify-nu-smoky.vercel.app/api"
    : "/api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies with the request
});
