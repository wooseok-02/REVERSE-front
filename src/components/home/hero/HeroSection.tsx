import { useEffect, useState } from "react";
import * as S from "./HeroSection.styles";

import heroBg from "../../../assets/images/hero-bg.jpg";
import aboutBg from "../../../assets/images/about-bg.jpg";
import calendarBg from "../../../assets/images/calendar-bg.jpg";
import noticeBg from "../../../assets/images/notice-bg.jpg";
import projectMainBg from "../../../assets/images/project-main.jpg";

const heroImages = [heroBg, aboutBg, calendarBg, noticeBg, projectMainBg];
const AUTO_SLIDE_DELAY = 4000;

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, AUTO_SLIDE_DELAY);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <S.Section>
      <S.SliderTrack style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {heroImages.map((image, index) => (
          <S.Slide key={`${image}-${index}`}>
            <S.BackgroundImage
              src={image}
              alt={`REVERSE hero slide ${index + 1}`}
            />
            <S.Overlay />
          </S.Slide>
        ))}
      </S.SliderTrack>

      <S.IndicatorList>
        {heroImages.map((_, index) => (
          <S.IndicatorButton
            key={`hero-indicator-${index}`}
            type='button'
            $active={activeIndex === index}
            aria-label={`Go to hero slide ${index + 1}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </S.IndicatorList>
    </S.Section>
  );
}
