import { axiosInstance } from "./axiosInstance";

// 프로젝트 타입 정의
export interface ClubProject {
  projectId: number;
  projectName: string;
  projectUrl: string;
  thumbnailUrl: string;
  sortOrder: number;
  updatedBy: string;
  createdDate: string;
  modifiedDate: string;
}

export interface ClubProjectPayload {
  projectName: string;
  projectUrl: string;
  thumbnailUrl: string;
  sortOrder: number;
  updatedBy: string;
}

// 프로젝트 목록 조회 (GET)
export const getProjectList = async (): Promise<ClubProject[]> => {
  const response = await axiosInstance.get("/api/club-project");
  console.log("VITE_API_URL:", import.meta.env.VITE_API_URL);
  return response.data;
};

// 이미지 업로드 (POST)
export const uploadProjectImage = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("folder", "project");

  const response = await axiosInstance.post("/api/club-project/image", formData);
  return response.data;
};

// 프로젝트 등록 (POST)
export const createProject = async (
  payload: ClubProjectPayload
): Promise<ClubProject> => {
  const response = await axiosInstance.post("/api/club-project", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

// 프로젝트 삭제 (DELETE)
export const deleteProject = async (id: number | string) => {
  const response = await axiosInstance.delete(`/api/club-project/${id}`);
  return response.data;
};