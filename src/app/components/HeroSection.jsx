"use client";

import React, { useState } from "react";
import Image from "next/image";
import { language, setLanguage, toggleLanguage } from "./Navbar.jsx";
import { TypeAnimation } from "react-type-animation";
import EducationSection from "./EducationSection.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
const HeroSection = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab === activeTab ? null : tab);
  };

  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  const getDynamicContent = () => {
    switch (activeTab) {
      default:
        return {
          title: "About Me",
          content: (
            <>
              <p>
              {`I've been living with computers and technology for as long as I
                can remember.`}
              </p>
              <p>
              {`I'm a passionate developer deeply in love with computer science,
                who can boast a <strong>robust programming background</strong> that
                spans almost a decade.`}
              </p>
              <p>
                My coding journey began at a really young age, so I had the chance to try different fields
                of computer science, leading now to my profound interest in{" "}
                <strong>Artificial Intelligence</strong>,{" "}
                <strong>Machine Learning</strong>,{" "}
                <strong>Computer Vision</strong>, and{" "}
                <strong>Game Development</strong>.
              </p>
              <p>
                I maintain a keen eye for intertwining computer science with my
                greatest passions, such as music. Doing so, I embark on
                functional and educational personal projects in which I can best
                express my open, <strong>creative and curious mindset</strong>, taking advantage of my ability to learn quickly and be very versatile.
              </p>
            </>
          ),
        };

      case "Test2":
        return {
          title: "Education",
          content: <EducationSection />,
        };
      case "Test3":
        return {
          title: "Skills",
          content: <ul style={{ lineHeight: "2.0", marginLeft: "12px" }}></ul>,
        };
    }
  };

  const { title, content } = getDynamicContent();


  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-12 md:col-span-5 md:place-self-center lg:place-self-start xl:text-right">
          <h1 className="text-white mb-4 text-4xl md:ml-8 xl:ml-8 mt-24 sm:text-5xl lg:text-6xl font-extrabold text-center sm:text-left">
          {`hi, i'm`}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8A278D] via-[#F0028D] to-[#12CAB5]">
              <TypeAnimation sequence={[" david"]} wrapper="span" speed={50} />
            </span>
          </h1>
          <div className="mx-auto mt-4 lg:mt-0">
            <div className="rounded-full bg-[#59455e] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative mb-2 transform -translate-y-1/6 mx-auto top-1/2">
              <Image
                src="/images/picrew.png"
                alt="This is me!"
                className="absolute mx-auto lg:w-[300px] lg:h-[300px]"
                width={250}
                height={250}
              />
            </div>
            <div className="flex center mt-6 md:ml-12 xl:ml-12 flex-col sm:flex-row">
              <button
                className="bg-transparent hover:bg-[#303a50] text-white px-4 py-2 rounded-md mb-2 sm:mb-0 sm:mr-2"
                onClick={() => handleButtonClick("https://github.com/davidcocc/")}
              >
                <FontAwesomeIcon icon={faGithub} className="mr-2" />
                GitHub
              </button>
              <button
                className="bg-transparent hover:bg-[#4967aa] text-white px-4 py-2 rounded-md mb-2 sm:mb-0 sm:mr-2"
                onClick={() => handleButtonClick("https://www.linkedin.com/in/davidcocc/")}
              >
                <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                LinkedIn
              </button>
              <button
                className="bg-transparent hover:bg-[#ba0c2f] text-white px-4 py-2 rounded-md"
                onClick={() => handleButtonClick("https://google.com")}
              >
                <FontAwesomeIcon icon={faFilePdf} className="mr-2" />
                CV
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-7 md:col-span-7 md:col-start-9">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#12CAB5] via-[#F0028D] to-[#8A278D] mt-24 mb-2 text-2xl sm:text-3xl lg:text-4xl font-bold xl:text-right lg:text-right text-center">
            {title}
          </h1>
          <p className="text-[#f1f1f1] sm:text-lg mb-6 lg:text-xl lg:text-right xl:text-right text-center">
            {content}
          </p>
          <div></div>
        </div>
      </div>
    </section>
  );
  
};

export default HeroSection;
