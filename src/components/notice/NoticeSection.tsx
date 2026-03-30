import { useMemo, useState } from "react";
import * as S from "./NoticeSection.styles";
import heroImage from "../../assets/images/notice-bg.jpg";

type Category = "전체" | "카테고리 1" | "카테고리 2" | "카테고리 3";

type Notice = {
  id: number;
  title: string;
  category: Category;
  description: string;
};

const CATEGORY_LIST: Category[] = [
  "전체",
  "카테고리 1",
  "카테고리 2",
  "카테고리 3",
];

const NOTICE_DATA: Notice[] = [
  {
    id: 1,
    title: "REVERSE",
    category: "카테고리 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    id: 2,
    title: "Job Title",
    category: "카테고리 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    id: 3,
    title: "Job Title",
    category: "카테고리 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
];

export default function NoticeSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("전체");

  const filteredList = useMemo(() => {
    if (activeCategory === "전체") return NOTICE_DATA;

    return NOTICE_DATA.filter((notice) => notice.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <S.Hero $image={heroImage}>
        <S.HeroOverlay />
        <S.HeroContent>
          <S.HeroTitle>공지사항</S.HeroTitle>
          <S.HeroDesc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </S.HeroDesc>
        </S.HeroContent>
      </S.Hero>

      <S.Section>
        <S.Inner>
          {/* 카테고리 탭 */}
          <S.TabList>
            {CATEGORY_LIST.map((category) => (
              <S.TabButton
                key={category}
                $active={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </S.TabButton>
            ))}
          </S.TabList>

          <S.CardList>
            {filteredList.map((notice) => (
              <S.Card key={notice.id}>
                <S.CardTop>
                  <S.TitleGroup>
                    <S.Title>{notice.title}</S.Title>
                    <S.Category>{notice.category}</S.Category>
                  </S.TitleGroup>

                  <S.MoreButton>
                    Apply Now
                    <S.Arrow>›</S.Arrow>
                  </S.MoreButton>
                </S.CardTop>

                <S.Description>{notice.description}</S.Description>
              </S.Card>
            ))}
          </S.CardList>
        </S.Inner>
      </S.Section>
    </>
  );
}
