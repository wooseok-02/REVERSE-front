import { axiosInstance } from "./axiosInstance";

export interface NoticeListItem {
  id: number;
  title: string;
  createdAt: string;
}

export interface Notice {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

export interface NoticePayload {
  title: string;
  content: string;
  isPinned: boolean;
  noticeId?: number;
}

interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
}

// 목록 조회
export const getNoticeList = async (): Promise<NoticeListItem[]> => {
  const response = await axiosInstance.get<ApiResponse<NoticeListItem[]>>(
    "/api/notices"
  );
  return response.data.data;
};

// 상세 조회
export const getNoticeDetail = async (
  id: string | number
): Promise<Notice> => {
  const response = await axiosInstance.get<ApiResponse<Notice>>(
    `/api/notices/${id}`
  );
  return response.data.data;
};

// 등록 / 수정
export const createNotice = async (payload: NoticePayload) => {
  const response = await axiosInstance.post<
    ApiResponse<{ noticeId: number }>
  >("/api/posts/notices", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
};

// 삭제
export const deleteNotice = async (id: string | number) => {
  const response = await axiosInstance.delete<
    ApiResponse<{ noticeId: number }>
  >(`/api/posts/notices/${id}`);

  return response.data;
};