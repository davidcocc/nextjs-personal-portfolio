import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ imgUrl, title, description, year, technologies, gitUrl, previewUrl }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
    document.body.style.overflow = "hidden"; // Blocca lo scrolling della pagina
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    document.body.style.overflow = "auto"; // Ripristina lo scrolling della pagina
  };

  return (
    <div className="group relative">
      <div
        className="h-52 md:h-72 rounded-t-xl relative group overflow-hidden transition-transform ease-in-out duration-300 hover:scale-105 cursor-pointer"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
        onClick={openPopup}
      >
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-sm text-gray-400 mb-2">{year}</p>
        <h6 className="text-[#ffacf5]">{technologies}</h6>
      </div>
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black bg-opacity-70 transition-opacity duration-300"
            onClick={closePopup}
          ></div>

          <div className="relative w-full md:w-[80%] lg:w-[60%] xl:w-[50%] bg-[#121212] rounded-xl shadow-lg transition-transform transform scale-90 opacity-0 animate-popup-in">
            <button
              className="absolute top-4 right-4 text-white text-2xl cursor-pointer z-10 hover:text-red-500 transition-colors"
              onClick={closePopup}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#12CAB5] via-[#F0028D] to-[#8A278D]">
                {title}
              </h2>
              <p className="text-lg text-[#c5b0ca] mb-4">{description}</p>
              <div className="flex justify-end space-x-4">
                {gitUrl && (
                  <a
                    href={gitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#4e3050] text-white px-4 py-2 rounded-md hover:bg-[#8f4994] transition"
                  >
                    View
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;