export interface ExecutiveMember {
  id: number;
  name: string;
  role: string;
  email: string;
}

export interface ExecutiveTeam {
  id: number;
  teamName: string;
  members: ExecutiveMember[];
}

export const executiveData: ExecutiveTeam[] = [
  {
    id: 1,
    teamName: "프론트엔드",
    members: [
      { id: 1, name: "홍길동", role: "직책", email: "abc123@gmail.com" },
      { id: 2, name: "홍길동", role: "직책", email: "abc123@gmail.com" },
    ],
  },
  {
    id: 2,
    teamName: "백엔드",
    members: [
      { id: 3, name: "홍길동", role: "직책", email: "abc123@gmail.com" },
      { id: 4, name: "홍길동", role: "직책", email: "abc123@gmail.com" },
    ],
  },
  {
    id: 3,
    teamName: "기획",
    members: [
      { id: 5, name: "홍길동", role: "직책", email: "abc123@gmail.com" },
      { id: 6, name: "홍길동", role: "직책", email: "abc123@gmail.com" },
    ],
  },
  {
    id: 4,
    teamName: "디자인",
    members: [
      { id: 7, name: "홍길동", role: "직책", email: "abc123@gmail.com" },
      { id: 8, name: "홍길동", role: "직책", email: "abc123@gmail.com" },
    ],
  },
];
