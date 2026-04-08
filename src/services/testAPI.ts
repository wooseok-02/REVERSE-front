import { axiosInstance } from "./axiosInstance";

export const testApiConnection = async () => {
  const response = await axiosInstance.get("/api/club-intro");
  return response.data;
};
