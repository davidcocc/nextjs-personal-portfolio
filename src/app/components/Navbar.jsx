"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = {
  en: [
    { title: "Skills", path: "#skills" },
    { title: "Projects", path: "#projects" },
    { title: "Hobbies", path: "#hobbies" },
  ],
  it: [
    { title: "Competenze", path: "#skills" },
    { title: "Progetti", path: "#projects" },
    { title: "Hobby", path: "#hobbies" },
  ],
};

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "it" : "en"));
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-95">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold bg-clip-text bg-gradient-to-r from-[#12CAB5] via-[#F0028D] to-[#8A278D] transition duration-300 ease-in-out hover:text-transparent"
        >
          dvdvdvd
        </Link>

        <div className="flex items-center">
          <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>
          <button onClick={toggleLanguage} className="ml-4" hidden>
            {language === "en" ? (
              <img
                src="/images/flags/italy.svg"
                alt="Italian"
                className="h-6 w-6"
              />
            ) : (
              <img
                src="/images/flags/uk.svg"
                alt="English"
                className="h-6 w-6"
              />
            )}
          </button>
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks[language].map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks[language]} /> : null}
    </nav>
  );
};

export default Navbar;
