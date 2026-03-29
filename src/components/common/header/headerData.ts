import type { HeaderMenuItem } from "./Header.types";

export const headerMenus: HeaderMenuItem[] = [
  {
    key: "about",
    label: "About Us",
    sections: [
      {
        title: "소개",
        items: ["동아리 소개", "임원진 소개", "프로젝트 소개"],
      },
    ],
  },
  {
    key: "activity",
    label: "활동 및 참여",
    sections: [
      {
        title: "스터디",
        items: ["스터디 게시판"],
      },
      {
        title: "프로젝트",
        items: ["스터디 게시판", "프로젝트 게시판"],
      },
      {
        title: "출석 관리",
        items: [],
      },
    ],
  },
  {
    key: "info",
    label: "정보 및 교류",
    sections: [
      {
        title: "정보",
        items: ["IT 이슈 종합"],
      },
      {
        title: "교류",
        items: ["밥 약속 기능 (가제)"],
      },
    ],
  },
  {
    key: "board",
    label: "게시판",
    sections: [
      {
        title: "자유 게시판",
        items: [],
      },
      {
        title: "대외활동 게시판",
        items: [],
      },
      {
        title: "족보 공유 게시판",
        items: [],
      },
      {
        title: "교재/교구 나눔 게시판",
        items: [],
      },
      {
        title: "질의 응답 게시판",
        items: [],
      },
    ],
  },
];
