"use client";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

export default function Welcome() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center md:items-stretch py-8 sm:py-8 px-6 sm:px-6">
        {/* Left Content */}
        <div className="flex-1 flex flex-col md:items-start md:text-left  md:py-0">
          <p className="text-lg text-gray-700 mb-2">
            Hi, Welcome! Here it's me
          </p>
          {/* Name and Designation */}
          <div className="flex flex-col mb-4">
            <h1 className="text-4xl font-bold text-left">
              Praveen Kumar Alugoju
            </h1>
            <span className="text-blue-600 font-medium text-right whitespace-nowrap">
              Front-End Developer
            </span>
          </div>
          {/* SVG for mobile */}
          <div className="w-full flex justify-center md:hidden">
            <img
              src="/my_pic_2.jpg"
              alt="Praveen Here!"
              className="w-64 h-64 rounded-full object-cover border-4 border-blue-500 shadow-lg"
            />
          </div>
          {/* Description */}
          <p className="text-xl text-gray-600 mb-6 mt-4 flex justify-content-start indent-8">
            As a passionate Front-End Developer, I specialize in building
            modern, high-performance, and accessible web applications. My
            expertise lies in translating design concepts into responsive,
            user-friendly interfaces using React, Next.js, and Angular. I am
            dedicated to delivering pixel-perfect solutions, optimizing web
            performance, and ensuring seamless user experiences across all
            devices. I thrive on solving complex UI challenges and am committed
            to continuous learning and innovation in front-end technologies.
          </p>
          {/* Contact Me Button and Social Icons (Desktop only) */}
          <div className="w-full flex justify-center md:justify-start items-center gap-4">
            <a
              href="#contact"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Contact Me
            </a>
            {/* Social Icons for desktop only */}
            <div className="hidden md:flex gap-4 ml-2">
              <a
                href="https://github.com/prven04"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-700 hover:text-blue-500 text-2xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/praveenkumar-alugoju-730538333/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-700 hover:text-blue-500 text-2xl"
              >
                <CiLinkedin />
              </a>
            </div>
          </div>
        </div>
        {/* SVG for desktop */}
        <div className="flex-1 flex justify-center items-center mt-8 md:mt-0 hidden md:flex">
          <img
            src="/developer_role.svg"
            alt="Developer Role"
            className="w-72 h-72 object-contain"
          />
          {/* <img
            src="/my_pic_2.jpg"
            alt="Praveen Here!"
            className="w-60 h-60 rounded-full object-cover border-4 border-blue-500 shadow-lg"
          /> */}
        </div>
      </div>
    </div>
  );
}
