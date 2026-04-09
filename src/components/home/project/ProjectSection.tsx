import { useState, useEffect } from "react";
import BlurGlow from "../../common/blur/BlurGlow";
import * as S from "./ProjectSection.styles";
import { getProjectList } from "../../../services/projectAPI";
import type { ClubProject } from "../../../services/projectAPI";

export default function ProjectSection() {
  const [projectData, setProjectData] = useState<ClubProject[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProjectList();
        setProjectData(data);
      } catch (error) {
        console.error("프로젝트 데이터 불러오기 실패", error);
      }
    };
    fetchData();
  }, []);

  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [openedId, setOpenedId] = useState<number | null>(null);

  return (
    <>
      <S.Section>
        <S.Inner>
          <S.Header>
            <S.Title>PROJECT</S.Title>
            <S.Subtitle>REVERSE 프로젝트를 소개합니다!</S.Subtitle>
          </S.Header>

          <S.CardGrid>
            {projectData.map((item) => {
              const isHovered = hoveredId === item.id;
              const isOpened = openedId === item.id;

              return (
                <S.CardItem key={item.id}>
                  <S.CardFrame
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() =>
                      setHoveredId((prev) => (prev === item.id ? null : prev))
                    }
                  >
                    {isOpened ? (
                      <S.DetailCard>
                        {
                          <S.DetailGlowWrap>
                            <BlurGlow
                              color='#5580EF'
                              blur={120}
                              size={280}
                              right='-80px'
                              bottom='-40px'
                              opacity={0.45}
                            />
                          </S.DetailGlowWrap>
                        }

                        <S.CloseButton
                          type='button'
                          aria-label={`${item.title} 상세 닫기`}
                          onClick={() => setOpenedId(null)}
                        >
                          ×
                        </S.CloseButton>

                        <S.DetailInner>{item.detailText}</S.DetailInner>
                      </S.DetailCard>
                    ) : (
                      <S.ImageCard
                        type='button'
                        onClick={() => setOpenedId(item.id)}
                        aria-label={`${item.title} 더보기`}
                      >
                        <S.Image src={item.image} alt={item.title} />
                        <S.HoverOverlay $visible={isHovered}>
                          <S.MoreText>더보기 +</S.MoreText>
                        </S.HoverOverlay>
                      </S.ImageCard>
                    )}
                  </S.CardFrame>

                  <S.CardTitle>{item.title}</S.CardTitle>
                </S.CardItem>
              );
            })}
          </S.CardGrid>
        </S.Inner>
      </S.Section>
    </>
  );
}
