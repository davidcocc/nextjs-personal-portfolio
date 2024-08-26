"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Space Buddy",
    description: "This project has been developed for the Enterprise Mobile Application Development exam at the University of Salerno (Master's Degree), supervised by a tutor from Google and competing in UniSA's App Challenge. It is an application in VR aimed at providing companionship to young users through a small robotic friend, known as Buddy, an animated chatbot powered by Google Bard. In addition to chatbot functionalities, our Buddy engages users with games, animations, and even aesthetic customizations! The project is being developed in Unity by me and my team, and the target platform is the Meta Quest 2. My role involved, but not limited to, the development of the chatbot, 3D modeling and rigging, creation of an appealing marketing campaign, as well as playing a leadership role within the working group.",
    year: "October 2023 - February 2024",
    technologies: "Unity3D | Virtual Reality | Chatbot | C# | Python | Blender ...",
    image: "/images/buddy.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7168222713633751040/?originalSubdomain=it",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "SpotifAI - Playground for Machine Learning using Spotify APIs",
    description: "This project has been developed for the Artificial Intelligence Foundaments exam at the University of Salerno (Bachelor's Degree). This project utilizes Spotify APIs to analyze songs extracted from a user's profile based on various song characteristics such as mood, rhythm, danceability, etc. It then creates clusters based on the similarity of songs in terms of conveyed vibes, leading to interesting analysis and observations. These clusters are then transformed into playlists and saved on the user's profile, with the ability to predict the most appropriate playlists for a new input song. In the future, I will expand this project by incorporating a song recommendation system for each playlist, considering not only the mood but also other features like language of the lyrics or musical genre.",
    year: "December 2022 - February 2023",
    technologies: "Python | Machine Learning | Data Analysis | Artificial Intelligence  ...",
    image: "/images/spotifai.JPG",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/davidcocc/SpotifAI",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Quantum NLP Classifier for Security Requirements",
    description: "This project has been developed for my Bachelor's Degree thesis work in collaboration with SeSaLab in University of Salerno. Essentially, what I have done is developing and testing Natural Language Processing pipelines on quantum processor simulators using the lambeq library. Taking advantage of the foundational concepts in quantum computing, I have made Machine Learning models geared towards the identification and classification of security requirements, comparing performance and costs with a classical pipeline. It has been an intriguing and enlightening experience that allowed me to take a step towards the future of computing.",
    year: "March 2023 - August 2023",
    technologies: "Quantum Computing | Python | Machine Learning | NLP | Requirements Engineering | Data Analysis ...",
    image: "/images/quantum1.jpg",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "/",
  },

  {
    id: 4,
    title: "LetMeCook",
    description: "This project has been developed for the Information Visualization exam at the University of Salerno (Master's Degree). Essentially, the application provides a culinary assistant powered by a language model. Users can add ingredients either by scanning the barcode or by capturing them with their smartphone camera, thanks to a model trained for vegetable and fruit recognition. Users can incorporate these ingredients into their recipe, also selecting information about their food preferences and allergies. This information is then passed as prompts to a chatbot that suggests a recipe to the user, guiding them through the preparation process.",
    year: "January 2024",
    technologies: "Unity3D | Augmented Reality | Computer Vision | Machine Learning | LLM ...",
    image: "/images/letmecook.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/davidcocc/LetMeCook",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "JaQo - Just Another Quantum Orchestra",
    description: "JaQo combines quantum computing concepts with music theory to generate MIDI files. It uses PQCA to create patterns that are then translated into musical elements such as pitch, rhythm, and instrumentation. The repository also feats some demo music scores generated by the tool. These are the same music pieces that have been proposed in a survey to assest the creative aspect of the algorithm.",
    year: "July 2024",
    technologies: "Quantum Computing | Python | Machine Learning | music21 | MIDI ...",
    image: "/images/jaqo.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/musimathicslab/JaQo",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "MedGraph",
    year: "May 2024 - July 2024",
    description: "This project was developed for the Data Science and Machine Learning course at the University of Salerno. The primary objective is to provide researchers in the biomedical field with a useful and engaging graph-based interface. This interface allows users to explore relationships between academic papers, research studies, and various topics. For instance, users can visualize scientific research featuring a specific topic of interest, and then explore related papers that may offer additional valuable insights. Thanks to graph-based visualization, this tool facilitates the discovery of connections and patterns within biomedical literature, potentially accelerating research processes. Named Entity Recognition algorithms have been used in order to recognize relationships between different research papers and arguments.",
    technologies: "Graph Visualization | MongoDB | JavaScript | Named Entity Recognition ...",
    image: "/images/medgraph.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/adriano22jr/MedGraph",
    previewUrl: "/",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-48 mb-2 md:mb-2 sm:mt-16">
        My Projects
      </h2>
      <p className="text-[#f1f1f1] sm:text-lg mb-6 lg:text-xl lg:text-center xl:text-center sm:text-center md:text-center">
      {`During my computer science adventure, I've started a lot of cool academic and personal projects. They've been my training ground for tech and soft skills, so let me give you a little sneak peek into some of the ones that I am most proud of or I just find more relevant.`}
      </p>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              year={project.year}
              technologies={project.technologies}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
