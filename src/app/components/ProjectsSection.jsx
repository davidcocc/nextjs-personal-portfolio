"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Space Buddy",
    description: "This project has been developed for the Enterprise Mobile Application Development exam at the University of Salerno (Master's Degree), supervised by a tutor from Google and competing in UniSA's App Challenge. It is an application in VR aimed at providing companionship to young users through a small robotic friend, known as Buddy, an animated chatbot powered by Google Bard. In addition to chatbot functionalities, our Buddy engages users with games, animations, and even aesthetic customizations! The project is being developed in Unity by me and my team, and the target platform is the Meta Quest 2. My role involved, but not limited to, the development of the chatbot, 3D modeling and rigging, creation of an appealing marketing campaign, as well as playing a leadership role within the working group.",
    technologies: "Unity3D | Virtual Reality | Chatbot | C# | Python | Blender ...",
    image: "/images/buddy.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "SpotifAI - Playground for Machine Learning using Spotify APIs",
    description: "This project has been developed for the Artificial Intelligence Foundaments exam at the University of Salerno (Bachelor's Degree). This project utilizes Spotify APIs to analyze songs extracted from a user's profile based on various song characteristics such as mood, rhythm, danceability, etc. It then creates clusters based on the similarity of songs in terms of conveyed vibes, leading to interesting analysis and observations. These clusters are then transformed into playlists and saved on the user's profile, with the ability to predict the most appropriate playlists for a new input song. In the future, I will expand this project by incorporating a song recommendation system for each playlist, considering not only the mood but also other features like language of the lyrics or musical genre.",
    technologies: "Python | Machine Learning | Data Analysis | Artificial Intelligence  ...",
    image: "/images/spotifai.JPG",
    tag: ["All", "Mobile"],
    gitUrl: "",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Quantum NLP Classifier for Security Requirements",
    description: "This project has been developed for my Bachelor's Degree thesis work in collaboration with SeSaLab in University of Salerno. Essentially, what I have done is developing and testing Natural Language Processing pipelines on quantum processor simulators using the lambeq library. Taking advantage of the foundational concepts in quantum computing, I have made Machine Learning models geared towards the identification and classification of security requirements, comparing performance and costs with a classical pipeline. It has been an intriguing and enlightening experience that allowed me to take a step towards the future of computing.",
    technologies: "Quantum Computing | Python | Machine Learning | NLP | Requirements Engineering | Data Analysis ...",
    image: "/images/quantum1.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },

  {
    id: 4,
    title: "LetMeCook",
    description: "This project has been developed for the Information Visualization exam at the University of Salerno (Master's Degree). Essentially, the application provides a culinary assistant powered by a language model. Users can add ingredients either by scanning the barcode or by capturing them with their smartphone camera, thanks to a model trained for vegetable and fruit recognition. Users can incorporate these ingredients into their recipe, also selecting information about their food preferences and allergies. This information is then passed as prompts to a chatbot that suggests a recipe to the user, guiding them through the preparation process.",
    technologies: "Unity3D | Augmented Reality | Computer Vision | Machine Learning | LLM ...",
    image: "/images/letmecook.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Main Science and Technology Indicators Analysis",
    description: "This project has been developed for the Data Analysis and Statistics exam at the University of Salerno. (Master's Degree). The goal of this project was to become familiar not only with R language, but with concepts of mathematical statistics in general at a particularly high level. It is really being fun and interesting to learn new stuff by exploring functions and formulas; we used a dataset of technologic development indicators in several nations, evaluating how this data correlates with the gross domestic product (GDP) of various countries and the allocation of funds invested in this direction.",
    technologies: "R | Data Analysis ...",
    image: "/images/gerd_gdp.JPG",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Music Generation",
    description: "This project has been developed for the Musimathics exam at the University of Salerno. The idea behind it is to build a Machine Learning model trained on MIDI files of musical pieces by the greatest classical composers who ever lived like Wolfgang Amadeus Mozart or Ludwig van Beethoven in order to generate new musical scores based on their styles. I am not really satisfied with the final result: the dataset was poor-ish and I made some mistakes in tuning and setting the model (it was one of my first experiences!), but I still learned a lot and I am confident this project could be improved and expanded in the future.",
    technologies: "Python | Machine Learning | music21 | MIDI ...",
    image: "/images/mm.JPG",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Personal Portfolio Website",
    description: "Well... if you're reading this, it should mean you are trying this project out right now, so I think it is kind of self-explanatory! Nothing too complicated or extreme. I've already created a bunch of webpages before, so it was a chill project for my free time, and I really had fun creating it... enjoy your stay!",
    technologies: "React | TailwindCSS | NextJS ...",
    image: "/images/react.JPG",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "AR Playground",
    description: "This project has been developed for my school graduation exam... well, it was a first approach with these technologies, a lot of time has passed at thankfully I improved a lot. The idea was to build a playground for AR, making paintings move and spawning 3D models over labeled surfaces, you know the drill. I have to say I am not proud of it as a developer, but looking back I'm quite fond of it, being one of my first projects!",
    technologies: "Unity3D | Augmented Reality | VuforiaEngine ...",
    image: "/images/arart.png",
    tag: ["All", "Web"],
    gitUrl: "/",
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
