"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faLaptopCode, faUsers } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const ExperienceSection = () => {
  return (
    <section id="experience" className="text-center">
      <h2 className="text-center text-4xl font-bold text-white mt-16 mb-8">
        Experiences
      </h2>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center md:flex md:flex-row md:justify-center"
      >
        {/* Esperienza 1 */}
        <motion.div
          className="flex flex-col items-center mb-6 md:flex-row md:justify-center"
          whileHover={{ scale: 1.05 }}
        >
          <FontAwesomeIcon
            icon={faLaptopCode}
            className="text-2xl text-white mb-2 md:mr-2"
          />
          <div className="flex items-center md:ml-2">
            <div>
              <h3 className="text-lg font-semibold">AI&ML Research Traineeship</h3>
              <p className="text-gray-300">March 2025 - June 2025</p>
              <p className="text-gray-300">Jheronimous Academy of Data Science</p>
              <p className="text-gray-300">'s-Hertogenbosch, Netherlands 🇳🇱</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
