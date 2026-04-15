import { useNavigate } from "react-router-dom";
import * as S from "./AdminPage.styles";

const adminMenus = [
  {
    title: "동아리 소개 관리",
    description: "메인 소개 문구와 배너 이미지를 등록하고 관리합니다.",
    path: "/admin/club-intro",
  },
  {
    title: "임원진 관리",
    description: "임원진 프로필, 역할, 노출 여부를 등록하고 관리합니다.",
    path: "/admin/officer",
  },
  {
    title: "규정 관리",
    description: "동아리 규정과 약관 데이터를 등록, 수정, 삭제합니다.",
    path: "/admin/terms",
  },
  {
    title: "프로젝트 관리",
    description: "프로젝트 이름, 링크, 썸네일 이미지를 등록하고 관리합니다.",
    path: "/admin/project",
  },
];

export default function AdminPage() {
  const navigate = useNavigate();

  return (
    <S.Page>
      <S.Shell>
        <S.Header>
          <S.Eyebrow>Temporary Admin</S.Eyebrow>
          <S.Title>관리자 임시 진입 페이지</S.Title>
          <S.Description>
            개발 중 흩어져 있는 관리자 페이지에 빠르게 접근하기 위한 임시
            페이지입니다.
          </S.Description>
        </S.Header>

        <S.Grid>
          {adminMenus.map((menu) => (
            <S.Card key={menu.path}>
              <S.CardTitle>{menu.title}</S.CardTitle>
              <S.CardText>{menu.description}</S.CardText>
              <S.MoveButton type='button' onClick={() => navigate(menu.path)}>
                이동하기
              </S.MoveButton>
            </S.Card>
          ))}
        </S.Grid>
      </S.Shell>
    </S.Page>
  );
}
