import Head from "next/head";
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

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});
function StarryBackground() {
  const stars = new Array(250).fill(0);

  return (
    <div className="animated-bg">
      {stars.map((_, i) => {
        const style = {
          top: `${Math.random() * 530}vh`,
          left: `${Math.random() * 80}vw`,
          animationDelay: `${Math.random() * 10}s`,
        };

        const speedClass = i % 2 === 0 ? "slow" : "fast";

        return <div key={i} className={`star ${speedClass}`} style={style}></div>;
      })}
    </div>
  );
}

export default function Home() {
  return (
    <main className={montserrat.className}>
      <div
        className="flex min-h-screen flex-col"
        style={{
          background: "radial-gradient(circle, #1b002e 0%, #121212 100%)",
        }}
      >
        <Head>
          <title>dvdvdvd</title>
        </Head>
        <Navbar />
        <StarryBackground />
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

