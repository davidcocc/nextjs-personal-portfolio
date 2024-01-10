import Head from 'next/head'
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import HobbiesSection from "./components/HobbiesSection";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";
import { Montserrat } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;
<Head>
<title>dvdvdvd</title>
</Head>
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <main className={montserrat.className}>
      <div
        className="flex min-h-screen flex-col"
        style={{
          background: "radial-gradient(circle, #17041a 0%, #121212 100%)",
        }}
      >
        <Navbar />
        <div className="container mt-4 mx-auto px-12 py-4">
          <HeroSection />
          <EducationSection />
          <SkillsSection />
          <ProjectsSection />
          <HobbiesSection />
        </div>
      </div>
    </main>
  );
}
