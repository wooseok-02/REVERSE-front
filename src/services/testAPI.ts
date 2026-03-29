import { axiosInstance } from "./axiosInstance";

export const testApiConnection = async () => {
  const response = await axiosInstance.get("/health");
  return response.data;
};
