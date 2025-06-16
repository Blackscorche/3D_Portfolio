import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setToggle(false);
      }
    };

    if (toggle) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [toggle]);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${
        scrolled ? "bg-primary backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        {/* Logo Section */}
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Abu &nbsp;
            <span className='sm:block hidden'> | 3D & Fullstack Developer</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer transition-colors duration-200`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className='sm:hidden flex flex-1 justify-end items-center' ref={dropdownRef}>
          <button
            className='w-[32px] h-[32px] flex items-center justify-center rounded-md hover:bg-white/10 transition-all duration-200'
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle menu"
          >
            <img
              src={toggle ? close : menu}
              alt='menu'
              className='w-[24px] h-[24px] object-contain transition-all duration-300'
            />
          </button>

          {/* Mobile Menu Dropdown */}
          <div
            className={`${
              toggle ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"
            } fixed top-[90px] right-4 w-[280px] bg-[#1a1a2e] border border-[#915eff]/20 rounded-2xl shadow-2xl backdrop-blur-md transition-all duration-300 ease-out z-50 overflow-hidden`}
          >
            {/* Menu Header */}
            <div className="px-6 py-4 border-b border-[#915eff]/10">
              <p className="text-white font-semibold text-sm">Navigation</p>
            </div>

            <ul className='list-none flex flex-col'>
              {navLinks.map((nav, index) => (
                <li key={nav.id}>
                  <a
                    href={`#${nav.id}`}
                    className={`flex items-center px-6 py-4 text-[16px] font-medium transition-all duration-200 hover:bg-[#915eff]/10 hover:pl-8 ${
                      active === nav.title 
                        ? "text-[#915eff] bg-[#915eff]/5 border-r-2 border-[#915eff]" 
                        : "text-gray-300 hover:text-white"
                    }`}
                    onClick={() => {
                      setToggle(false);
                      setActive(nav.title);
                    }}
                  >
                    <span className="flex-1">{nav.title}</span>
                    {active === nav.title && (
                      <div className="w-2 h-2 rounded-full bg-[#915eff]" />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            {/* Menu Footer */}
            <div className="px-6 py-3 bg-[#915eff]/5 border-t border-[#915eff]/10">
              <p className="text-xs text-gray-400 text-center">Abu | 3D & Fullstack Developer</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;