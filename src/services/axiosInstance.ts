import axios from "axios";

// const normalizeBaseUrl = (baseUrl?: string) => {
//   if (!baseUrl) return undefined;

//   const trimmed = baseUrl.trim();
//   const withProtocol = /^https?:\/\//i.test(trimmed)
//     ? trimmed
//     : `http://${trimmed}`;

//   return withProtocol.replace(/\/+$/, "");
// };

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});
