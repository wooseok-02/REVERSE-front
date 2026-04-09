import { axiosInstance } from "./axiosInstance";

export type ClubIntroPayload = {
  title: string;
  subTitle: string;
  bannerUrl: string;
  isActive: number;
  updatedBy: number;
};

export type ClubIntroResponse = ClubIntroPayload & {
  clubIntroId?: number;
  id?: number;
  createdAt?: string;
  updatedAt?: string;
  isActive?: boolean | number;
};

export const testApiConnection = async () => {
  const response = await axiosInstance.get("/api/club-project");
  return response.data;
};

export const getClubIntroList = async (): Promise<ClubIntroResponse[]> => {
  const response = await axiosInstance.get("/api/club-intro");
  return response.data;
};

export const createClubIntro = async (
  payload: ClubIntroPayload
): Promise<ClubIntroResponse> => {
  const response = await axiosInstance.post("/api/club-intro", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
};

export const deleteClubIntro = async (id: number | string) => {
  const response = await axiosInstance.delete(`/api/club-intro/${id}`);
  return response.data;
};
