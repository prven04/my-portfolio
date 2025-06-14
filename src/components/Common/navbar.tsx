"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaDraftingCompass } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const menuItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="flex items-center justify-between w-full">
        {/* Left: Logo */}
        <a
          href="#welcome"
          className="flex-shrink-0 font-bold text-white text-xl hover:text-blue-400 transition flex items-center"
          aria-label="Go to Welcome section"
          onClick={() => setMenuOpen(false)}
        >
          <motion.span
            initial={{ scale: 1 }}
            animate={{ scale: 1.2 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
              ease: "easeInOut",
            }}
            className="inline-block align-middle mr-2"
            style={{ transform: "scaleX(-1)" }}
          >
            <FaDraftingCompass size={32} className="text-blue-500" />
          </motion.span>
          <span className="sr-only">Logo</span>
        </a>
        {/* Social Icons (Mobile only, between logo and right icon) */}
        <div className="flex md:hidden gap-4 mx-2">
          <a
            href="https://github.com/prven04"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-200 hover:text-blue-400 text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/prven04"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-200 hover:text-blue-400 text-2xl"
          >
            <CiLinkedin />
          </a>
        </div>
        {/* Center: Menu (Desktop) */}
        <div className="hidden md:flex flex-1 justify-center gap-6">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-200 hover:text-blue-400 transition font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>
        {/* Right: Download CV */}
        <div className="flex-shrink-0 hidden md:block">
          <a
            href="/UI_Developer_PraveenKumarAlugoju_4.pdf"
            download
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-semibold transition"
          >
            Download CV
          </a>
        </div>
        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white ml-2"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center gap-4">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block w-full text-center py-2 text-gray-200 hover:text-blue-400 transition font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/UI_Developer_PraveenKumarAlugoju_4.pdf"
            download
            className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-semibold transition mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
}
