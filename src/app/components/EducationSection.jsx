"use client";
// use client
import React from "react";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faArrowRight,
  faBook,
  faCrown,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const EducationSection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <section id="skills" className="text-center">
      <h2 className="text-center text-4xl font-bold text-white mt-16 mb-8 md:mb-8">
        Education
      </h2>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center md:flex md:flex-row md:justify-center"
      >
        <motion.div
          className="flex flex-col items-center mb-6 md:flex-row md:justify-center"
          whileHover={{ scale: 1.05 }}
        >
          <FontAwesomeIcon
            icon={faBook}
            className="text-2xl text-white mb-2 md:mr-2 md:mb-0"
          />
          <div className="flex items-center md:ml-2">
            <div>
              <h3 className="text-lg font-semibold">
                Higher Technical Institute<br></br>Diploma
              </h3>
              <p className="text-gray-300">2015 - 2020</p>
              <p className="text-gray-300">
                <a href="https://www.iisfocaccia.it/">
                  IIS B.Focaccia - Salerno
                </a>
              </p>
              <p className="text-gray-300">100/100</p>
            </div>
            {!isMobile && (
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-[#ff85f7] hidden md:block ml-8 mr-8"
              />
            )}
          </div>
        </motion.div>

        {/* Laurea magistrale */}
        <motion.div
          className="flex flex-col items-center mb-6 md:flex-row md:justify-center"
          whileHover={{ scale: 1.05 }}
        >
          <FontAwesomeIcon
            icon={faGraduationCap}
            className="text-2xl text-white mb-2 md:mr-2 md:mb-0"
          />
          <div className="flex items-center md:ml-2">
            <div>
              <h3 className="text-lg font-semibold">
                Bachelor's Degree in<br></br>Computer Science
              </h3>
              <p className="text-gray-300">2020 - 2023</p>
              <p className="text-gray-300">
                <a href="https://corsi.unisa.it/informatica">
                  University of Salerno
                </a>
              </p>
              <p className="text-gray-300">96/110</p>
            </div>
            {!isMobile && (
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-[#ff85f7] hidden md:block ml-8 mr-8"
              />
            )}
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col items-center mb-6 md:flex-row md:justify-center"
          whileHover={{ scale: 1.05 }}
        >
          <FontAwesomeIcon
            icon={faCrown}
            className="text-2xl text-white mb-2 md:mr-2 md:mb-0"
          />
          <div className="flex items-center md:ml-2">
            <div>
              <h3 className="text-lg font-semibold">
                Master's Degree in<br></br>
                Data Science and Machine Learning
              </h3>
              <p className="text-gray-300">2023 - 2025 (expected)</p>
              <p className="text-gray-300">
                <a href="https://corsi.unisa.it/informatica-magistrale">
                  University of Salerno
                </a>
              </p>
              <p className="text-gray-300">??/110</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EducationSection;
