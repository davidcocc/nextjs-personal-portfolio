import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ imgUrl, title, description, technologies, gitUrl, previewUrl }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
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
        <h6 className="text-[#ffacf5]">{technologies}</h6>
      </div>

      {isPopupOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div className="relative w-full md:w-[80%] lg:w-[70%] xl:w-[60%] rounded-xl overflow-hidden transform transition-transform ease-in-out duration-300 shadow-xl">
            <button
              className="absolute top-4 right-4 text-white text-xl cursor-pointer z-10"
              onClick={closePopup}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className="bg-black bg-opacity-90 rounded-xl overflow-hidden relative border-4 border-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80"></div>
              <img
                src={imgUrl}
                alt={title}
                className="w-full h-[300px] object-cover rounded-t-xl"
              />
              <div className="text-white p-8 absolute top-0 left-0 w-full">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
