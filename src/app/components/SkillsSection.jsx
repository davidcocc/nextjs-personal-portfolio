"use client"
// components/SkillsSection.js

import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import { FaRobot, FaLaptopCode, FaNetworkWired, FaDiceD20, FaCalculator, FaChevronDown, FaChevronRight, FaPencilAlt } from "react-icons/fa";

const skillsCategories = [
  { title: "AI and Machine Learning", icon: <FaRobot size={24} />, skills: ["Main Frameworks, Tools and Libraries", "Natural Language Processing","Computer Vision", "Probability and Statistics", "R for Data Analysis and Visualization", "Big Data", "Deep Learning", "Neural Networks"], icon2: <FaChevronDown size={16} style={{ opacity: 0.5 }}/>},
  { title: "Programming", icon: <FaLaptopCode size={24} />, skills: ["Python", "C, C# and C++", "Java", "SQL", "Rust"], icon2: <FaChevronDown size={16} /> },
  { title: "Web Development", icon: <FaNetworkWired size={24} />, skills: ["HTML and CSS", "PHP", "JavaScript", "Node.js and Next.js", "React", "Flutter and Dart", "TypeScript", "TailwindCSS, Bootstrap"], icon2: <FaChevronDown size={16} style={{ opacity: 0.5 }}/> },
  { title: "Computing", icon: <FaCalculator size={24} />, skills: ["Git and Github", "Windows, Linux", "LaTeX", "Algorithm Design", "Computational Theory", "Cloud Platforms"], icon2: <FaChevronDown size={16} style={{ opacity: 0.5 }}/> },
  { title: "Soft Skills", icon: <FaPencilAlt size={24} />, skills: ["High ability to work in a team", "Effective and precise communication", "Adaptability to any environment and technology", "Curiosity and continuous learning", "Open-mindedness and creativity", "Excellent problem-solving skills", "Excellent organization and time management"], icon2: <FaChevronDown size={16} style={{ opacity: 0.5 }}/> },
  { title: "Miscellaneous", icon: <FaDiceD20 size={24} />, skills: ["Unity Engine", "Unreal Engine", "Godot Engine", "AR, VR and XR Development", "Basic Knowledge of Adobe Creative Suite", "Basic Knowledge of Blender", "Music Software (Audacity, Ableton, FLStudio...)"], icon2: <FaChevronDown size={16} style={{ opacity: 0.5 }}/> },
];
// ...
// ...

const SkillsSection = () => {
  const [openSections, setOpenSections] = useState([]);
  const [iconState, setIconState] = useState(
    skillsCategories.map(() => <FaChevronDown size={16} style={{ opacity: 0.5 }}/>)
  );

  const toggleSection = (index) => {
    setOpenSections((prevOpenSections) => {
      const isOpen = prevOpenSections.includes(index);

      const newIconState = iconState.map((icon, i) => {
        if (i === index) {
          return isOpen ? <FaChevronDown size={16} style={{ opacity: 0.5 }} /> : <FaChevronRight size={16} style={{ opacity: 0.5 }} />;
        }
        return icon;
      });

      setIconState(newIconState);

      return isOpen
        ? prevOpenSections.filter((item) => item !== index)
        : [...prevOpenSections, index];
    });
  };

  const transitions = useTransition(openSections, {
    from: { height: 0, opacity: 0 },
    enter: { height: "auto", opacity: 1 },
    leave: { height: 0, opacity: 0 },
    config: { tension: 400, friction: 26 },
  });

  return (
    <section id="skills" className="text-center">
      <h2 className="text-4xl font-bold text-white mt-16 mb-12 md:mb-12">
        My Skills
      </h2>

      <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {skillsCategories.map((category, index) => (
          <div key={index} className="mb-8">
            <div
              className="cursor-pointer flex items-center justify-center"
              onClick={() => toggleSection(index)}
            >
              {category.icon && <span className="mr-2">{category.icon}</span>}
              <h2 className="text-xl font-semibold">{category.title}</h2>
              {category.icon2 && <span className="ml-2">{iconState[index]}</span>}
            </div>
            {transitions((style, item) =>
              item === index ? (
                <animated.ul style={style}>
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </animated.ul>
              ) : null
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
