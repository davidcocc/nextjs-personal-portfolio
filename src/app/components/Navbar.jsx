"use client";
import Link from "next/link";
import React, {useState} from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "Skills",
    path: "#skills",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Hobbies",
    path: "#hobbies",
  }
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [language, setLanguage] = useState('en'); // 'en' per l'inglese, 'it' per l'italiano

  // Funzione per cambiare la lingua
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'it' : 'en'));
  };
  return (
    
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-95">
      
      <div className="flex flex-wrap items-center justify-between mx-auto px-4">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold hover:text-transparent bg-clip-text bg-gradient-to-r from-[#12CAB5] via-[#F0028D] to-[#8A278D]"
        >
          dvdvdvd
        </Link>

        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button onClick={() => setNavbarOpen(true)}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks}/>:null}
    </nav>
  );
  
};

export default Navbar;
