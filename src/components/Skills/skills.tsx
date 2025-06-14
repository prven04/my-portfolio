"use client";
import React from "react";
import * as motion from "motion/react-client";
import { FaDatabase } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { RiPsychotherapyLine } from "react-icons/ri";
export default function Skills() {
  return (
    <div className="flex flex-col items-center justify-center sm:py-8 px-6 sm:px-6">
      <h1 className="text-4xl font-bold mb-8 text-blue-700">Skills Overview</h1>
      <p className="text-lg text-gray-700 mb-6 text-center max-w-2xl">
        I have more than 4 years' experience building rich web applications for
        clients. Below is a quick overview of my main technical skill sets and
        tools I use. Want to find out more about my experience?
        <a
          href="https://praveen-alugoju.github.io/resume/"
          className="text-blue-600 underline hover:text-blue-800 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out my online resume.
        </a>
      </p>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 70 }}
        viewport={{ once: true }}
        className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-8 pt-5"
      >
        {/* Frontend */}
        <div className="flex-1 bg-white shadow-md rounded-xl p-6 relative flex flex-col items-center mb-4 md:mb-0">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center shadow">
            <FaCode className="text-white text-3xl" />
          </div>
          <h4 className="text-xl font-semibold text-center mt-8 mb-4 text-blue-700">
            Frontend
          </h4>
          <ul className="text-gray-700 space-y-2 mt-2">
            {[
              "React/Redux/Angular",
              "Javascript",
              "Node.js",
              "Webpack/Gulp/Grunt",
              "HTML/CSS/SASS/LESS",
            ].map((skill, idx) => (
              <motion.li
                key={skill}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: idx * 0.07,
                  type: "spring",
                  stiffness: 80,
                }}
                viewport={{ once: true }}
              >
                <svg
                  className="w-4 h-4 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>

                {skill}
              </motion.li>
            ))}
          </ul>
        </div>
        {/* Backend */}
        <div className="flex-1 bg-white shadow-md rounded-xl p-6 relative flex flex-col items-center mb-4 md:mb-0">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center shadow">
            <FaDatabase className="text-white text-3xl" />
          </div>
          <h4 className="text-xl font-semibold text-center mt-8 mb-4 text-blue-700">
            Backend
          </h4>
          <ul className="text-gray-700 space-y-2 mt-2">
            {[
              "Python/Django",
              "Ruby/Rails",
              "PHP",
              "PostgresSQL/MySQL",
              "MongoDB",
            ].map((skill, idx) => (
              <motion.li
                key={skill}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: idx * 0.07,
                  type: "spring",
                  stiffness: 80,
                }}
                viewport={{ once: true }}
              >
                <svg
                  className="w-4 h-4 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>
        {/* Others */}
        <div className="flex-1 bg-white shadow-md rounded-xl p-6 relative flex flex-col items-center">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center shadow">
            <RiPsychotherapyLine className="text-white text-3xl" />
          </div>
          <h4 className="text-xl font-semibold text-center mt-8 mb-4 text-blue-700">
            Others
          </h4>
          <ul className="text-gray-700 space-y-2 mt-2">
            {[
              "DevOps",
              "Unit Testing",
              "UX/Wireframing",
              "Sketch/Balsamiq",
              "Wordpress/Shopify",
            ].map((skill, idx) => (
              <motion.li
                key={skill}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: idx * 0.07,
                  type: "spring",
                  stiffness: 80,
                }}
                viewport={{ once: true }}
              >
                <svg
                  className="w-4 h-4 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* <div className="w-full max-w-2xl grid grid-cols-2 sm:grid-cols-3 gap-6">
        {[
          "Html5 & CSS3",
          "SASS",
          "Bootstrap",
          "JavaScript",
          "TypeScript",
          "Angular",
          "PrimeNG",
          "Angular Material",
          "React",
          "Next.js",
          "Redux",
          "Jest",
          "Responsive Design",
          "Git",
        ].map((skill, idx) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08, type: "spring", stiffness: 80 }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
            }}
            className="bg-white rounded-xl shadow-md p-4 flex items-center justify-center font-semibold text-blue-800 cursor-pointer transition-all"
          >
            {skill}
          </motion.div>
        ))}
      </div> */}
    </div>
  );
}
