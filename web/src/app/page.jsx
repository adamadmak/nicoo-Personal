"use client";
import { useState, useEffect } from "react";
import { useParticleCanvas } from "@/utils/useParticleCanvas";
import { useCursorPosition } from "@/utils/useCursorPosition";
import { useScrolled } from "@/utils/useScrolled";
import { scrollTo as scrollToUtil } from "@/utils/scrollTo";
import { Header } from "@/components/Header/Header";
import { BackgroundEffects } from "@/components/BackgroundEffects/BackgroundEffects";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { AboutSection } from "@/components/AboutSection/AboutSection";
import { SkillsSection } from "@/components/SkillsSection/SkillsSection";
import { WorkSection } from "@/components/WorkSection/WorkSection";
import { ServicesSection } from "@/components/ServicesSection/ServicesSection";
import { ContactSection } from "@/components/ContactSection/ContactSection";
import { Footer } from "@/components/Footer/Footer";
import { GlobalStyles } from "@/components/GlobalStyles/GlobalStyles";

export default function Portfolio() {
  const [activeNav, setActiveNav] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroLoaded, setHeroLoaded] = useState(false);

  const scrolled = useScrolled();
  const cursorPos = useCursorPosition();
  const canvasRef = useParticleCanvas();

  useEffect(() => {
    setTimeout(() => setHeroLoaded(true), 300);
  }, []);

  const scrollTo = (id) => {
    scrollToUtil(id, setActiveNav, setMenuOpen);
  };

  return (
    <div
      style={{
        background: "#080810",
        color: "#fff",
        fontFamily: "'Inter', sans-serif",
        overflowX: "hidden",
        minHeight: "100vh",
      }}
    >
      <BackgroundEffects cursorPos={cursorPos} canvasRef={canvasRef} />

      <Header
        scrolled={scrolled}
        activeNav={activeNav}
        scrollTo={scrollTo}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <HeroSection heroLoaded={heroLoaded} scrollTo={scrollTo} />

      <AboutSection scrollTo={scrollTo} />

      <SkillsSection />

      <WorkSection />

      <ServicesSection />

      <ContactSection />

      <Footer />

      <GlobalStyles />
    </div>
  );
}
