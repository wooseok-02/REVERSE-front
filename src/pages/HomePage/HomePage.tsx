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
