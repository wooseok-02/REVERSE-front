import { useMemo, useState } from "react";
import * as S from "./NoticeSection.styles";

type Category = "전체" | "공지" | "동아리 활동" | "대외활동";

type Notice = {
  id: number;
  title: string;
  subtitle?: string;
  category: Exclude<Category, "전체">;
  content: string;
  createdAt: string;
  author?: string;
  imageUrl?: string;
};

const CATEGORY_LIST: Category[] = ["전체", "공지", "동아리 활동", "대외활동"];

const NOTICE_DATA: Notice[] = [
  {
    id: 1,
    title: "REVERSE 전체 공지",
    subtitle: "Subtitle",
    category: "공지",
    content:
      "공지사항 내용을 여기에 입력하면 됩니다.",
    createdAt: "2026-03-31",
    author: "박수아",
    imageUrl:
      "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "MT",
    subtitle: "Subtitle",
    category: "동아리 활동",
    content:
      "공지사항 내용을 여기에 입력하면 됩니다.",
    createdAt: "2026-03-31",
    author: "박수아",
  },
  {
    id: 3,
    title: "REVERSE 부트캠프 1등",
    subtitle: "Subtitle",
    category: "동아리 활동",
    content:
      "공지사항 내용을 여기에 입력하면 됩니다.",
    createdAt: "2026-03-31",
    author: "박수아",
  },
  {
    id: 4,
    title: "REVERSE 창업 경진 대회 참여",
    subtitle: "Subtitle",
    category: "공지",
    content:
      "공지사항 내용을 여기에 입력하면 됩니다.",
    createdAt: "2026-03-31",
    author: "박수아",
  },
  {
    id: 5,
    title: "남서울대학교 AI 코딩 공모전",
    subtitle: "Subtitle",
    category: "대외활동",
    content:
      "공지사항 내용을 여기에 입력하면 됩니다.",
    createdAt: "2026-03-31",
    author: "박수아",
  },
  {
    id: 6,
    title: "REVERSE 부트캠프 1등",
    subtitle: "Subtitle",
    category: "동아리 활동",
    content:
      "공지사항 내용을 여기에 입력하면 됩니다.",
    createdAt: "2026-03-31",
    author: "박수아",
  },
];

export default function NoticeSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("전체");
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 5;

  const filteredList = useMemo(() => {
    if (activeCategory === "전체") return NOTICE_DATA;
    return NOTICE_DATA.filter((notice) => notice.category === activeCategory);
  }, [activeCategory]);

  const totalPages = Math.max(1, Math.ceil(filteredList.length / ITEMS_PER_PAGE));

  const pagedList = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredList.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredList, currentPage]);

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleOpenModal = (notice: Notice) => {
    setSelectedNotice(notice);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setSelectedNotice(null);
    document.body.style.overflow = "unset";
  };

  const getCategoryColor = (category: Notice["category"]) => {
    switch (category) {
      case "공지":
        return "#7D76FF";
      case "동아리 활동":
        return "#4A90FF";
      case "대외활동":
        return "#B084F5";
      default:
        return "#7D76FF";
    }
  };

  return (
    <>
      <S.HeroSection>
        <S.HeroTextWrap>
          <S.HeroTitle>공지사항</S.HeroTitle>
          <S.HeroDesc>
            리버스 공지사항 페이지 입니다. lsooodkoskofwoekdmsl
          </S.HeroDesc>
        </S.HeroTextWrap>
      </S.HeroSection>

      <S.Section>
        <S.Inner>
          <S.TopLine />

          <S.TabList>
            {CATEGORY_LIST.map((category) => (
              <S.TabButton
                key={category}
                type="button"
                $active={activeCategory === category}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </S.TabButton>
            ))}
          </S.TabList>

          <S.CardList>
            {pagedList.map((notice) => (
              <S.Card
                key={notice.id}
                type="button"
                onClick={() => handleOpenModal(notice)}
              >
                <S.CardRow>
                  <S.Left>
                    <S.Title>{notice.title}</S.Title>
                    <S.Category $bgColor={getCategoryColor(notice.category)}>
                      {notice.category}
                    </S.Category>
                  </S.Left>

                  <S.Right>
                    <S.ApplyText>Apply Now</S.ApplyText>
                    <S.More>›</S.More>
                  </S.Right>
                </S.CardRow>
              </S.Card>
            ))}
          </S.CardList>

          <S.Pagination>
            <S.PageNavButton
              type="button"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            >
              ← Previous
            </S.PageNavButton>

            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
              <S.PageNumberButton
                key={page}
                type="button"
                $active={currentPage === page}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </S.PageNumberButton>
            ))}

            <S.PageNavButton
              type="button"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            >
              Next →
            </S.PageNavButton>
          </S.Pagination>
        </S.Inner>
      </S.Section>

      {selectedNotice && (
        <S.ModalOverlay onClick={handleCloseModal}>
          <S.ModalContainer onClick={(e) => e.stopPropagation()}>
            <S.Close type="button" onClick={handleCloseModal}>
              ×
            </S.Close>

            <S.ModalTopBar>
              <S.ModalCategoryChip
                $bgColor={getCategoryColor(selectedNotice.category)}
              >
                {selectedNotice.category}
              </S.ModalCategoryChip>
              <S.ModalTopTitle>{selectedNotice.title}</S.ModalTopTitle>
            </S.ModalTopBar>

            <S.ModalDivider />

            <S.ModalHeaderRow>
              <S.ModalHeaderLeft>
                <S.ModalTitle>{selectedNotice.title}</S.ModalTitle>
                <S.ModalSub>{selectedNotice.subtitle}</S.ModalSub>
              </S.ModalHeaderLeft>

              <S.Meta>
                <S.AuthorText>
                  작성자: {selectedNotice.author ?? "부서수"}
                </S.AuthorText>
                <S.DateText>
                  작성일: {selectedNotice.createdAt}
                </S.DateText>
              </S.Meta>
            </S.ModalHeaderRow>

            <S.ContentBox>{selectedNotice.content}</S.ContentBox>

            {selectedNotice.imageUrl && (
              <S.ImageBox>
                <img src={selectedNotice.imageUrl} alt={selectedNotice.title} />
              </S.ImageBox>
            )}
          </S.ModalContainer>
        </S.ModalOverlay>
      )}
    </>
  );
}