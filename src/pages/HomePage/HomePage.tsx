import * as S from "./HomePage.styles";

import BlurGlow from "../../components/common/blur/BlurGlow";

import AboutSection from "../../components/home/about/AboutSection";
import ExecutiveSection from "../../components/home/executive/ExecutiveSection";
import HeroSection from "../../components/home/hero/HeroSection";
import HeroWordmark from "../../components/home/hero/HeroWordmark";
import ProjectSection from "../../components/home/project/ProjectSection";
import RuleSection from "../../components/home/rule/RuleSection";
import Footer from "../../components/common/footer/Footer";

export default function HomePage() {
  return (
    <S.Page>
      <BlurGlow
        color='#5580EF'
        blur={120}
        size={320}
        right='10vw'
        bottom='80vw'
        opacity={0.5}
      />

      <BlurGlow
        color='#6F3BF4'
        blur={160}
        size={400}
        left='15vw'
        bottom='50vw'
        opacity={0.45}
      />

      <BlurGlow
        color='#5580EF'
        blur={160}
        size={400}
        right='24vw'
        bottom='34vw'
        opacity={0.5}
      />

      <BlurGlow
        color='#6F3BF4'
        blur={160}
        size={400}
        left='28vw'
        bottom='16vw'
        opacity={0.45}
      />

      <BlurGlow
        color='#5580EF'
        blur={160}
        size={400}
        right='-6vw'
        bottom='4vw'
        opacity={0.5}
      />

      <HeroWordmark />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ExecutiveSection />
      <RuleSection />
      <Footer />
    </S.Page>
  );
}
