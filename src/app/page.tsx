"use client";
import HeroSection from "@/app/components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
          easing:"ease-out-back",
          duration: 1200,
          delay:100,
          mirror:true,
          anchorPlacement:"bottom-bottom",
          offset:160,
    });
    AOS.refresh();
  }, [])
  return (
     <main className="main-container">
      
      <div className="content-container">
      <HeroSection/>
      <AboutSection/>
      <ProjectsSection/>
      <EmailSection/>
      <Footer/>
      </div>
     </main>
  );
}
