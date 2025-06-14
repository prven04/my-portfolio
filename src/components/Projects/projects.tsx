"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const projects = [
  {
    title: "Snap Finance",
    duration: "3+ Years (Current)",
    client: "Snap",
    tech: "Angular, React, Next.js, TypeScript",
    details: [
      "Developed features using Angular & React.",
      "Integrated Amplitude Analytics.",
      "Implemented chatbot with Nice In-Contact.",
      "Used TrackJS & Sentry for bug tracking.",
      "Implemented Split.IO for A/B testing.",
      "Improved UI with GraphQL.",
      "Wrote unit tests with JEST.",
    ],
  },
  {
    title: "Bench Mark Education University",
    duration: "4 Months",
    client: "Bench Mark",
    tech: "React, Next.js, JavaScript",
    details: [
      "Built components using React hooks.",
      "Managed state with Redux.",
      "Used LESS for styles.",
      "Applied OOP for reusable UI.",
      "Worked with CI/CD pipelines.",
      "Utilized Node.js & D3.js.",
    ],
  },
  {
    title: "PLANCK Finance Project",
    duration: "11 Months",
    client: "FOCSFI",
    tech: "Angular, TypeScript",
    details: [
      "Analyzed user stories & legacy systems.",
      "Developed features with Angular & PrimeNG.",
      "Used Git for version control.",
      "Implemented dynamic forms & validations.",
      "Built custom UI components.",
    ],
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const handlePrev = () => {
    setDirection("left");
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setDirection("right");
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  // Animation variants for left/right slide
  const variants = {
    enter: (dir: "left" | "right") => ({
      x: dir === "right" ? 100 : -100,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: "left" | "right") => ({
      x: dir === "right" ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="max-w-5xl w-full rounded-lg py-8 sm:py-8 px-6 sm:px-6">
        <h1 className="text-3xl text-center font-bold mb-4">Projects</h1>
        {/* <div className="flex flex-col items-center justify-center py-8 sm:py-8 px-6 sm:px-6">
      <h1 className="text-3xl font-bold mb-4">Projects</h1> */}
        {/* Desktop view: 3 columns */}
        <div className="hidden md:flex flex-col md:flex-row gap-6 w-full max-w-5xl">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.title}
              className="bg-white rounded-lg shadow p-4 flex-1 min-w-[260px]"
              whileHover={{
                scale: 1.04,
                boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * (idx + 1) }}
            >
              <h2 className="text-xl font-semibold mb-1">{proj.title}</h2>
              <p className="text-gray-700 text-sm mb-1">
                <strong>Duration:</strong> {proj.duration}
              </p>
              <p className="text-gray-700 text-sm mb-1">
                <strong>Client:</strong> {proj.client}
              </p>
              <p className="text-gray-700 text-sm mb-2">
                <strong>Tech:</strong> {proj.tech}
              </p>
              <ul className="list-disc list-inside text-gray-600 text-xs space-y-1">
                {proj.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Mobile view: Carousel with drag support */}
        <div className="md:hidden w-full max-w-5xl flex flex-col items-center">
          <div className="relative w-full flex items-center">
            <motion.button
              className="flex-shrink-0 px-2 py-2 bg-gray-200 rounded-full hover:bg-gray-300 text-2xl flex items-center justify-center mr-1 shadow"
              onClick={handlePrev}
              aria-label="Previous Project"
              whileTap={{ scale: 0.85 }}
              whileHover={{ scale: 1.15 }}
              style={{ zIndex: 2 }}
            >
              <FaChevronLeft />
            </motion.button>
            <div className="flex-1 min-w-0">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={projects[current].title}
                  className="bg-white rounded-lg shadow p-4 w-full min-w-0 h-[320px] flex flex-col justify-between"
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                  style={{ position: "relative" }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.8}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -50) {
                      handleNext();
                    } else if (info.offset.x > 50) {
                      handlePrev();
                    }
                  }}
                >
                  <div>
                    <h2 className="text-xl font-semibold mb-1">
                      {projects[current].title}
                    </h2>
                    <p className="text-gray-700 text-sm mb-1">
                      <strong>Duration:</strong> {projects[current].duration}
                    </p>
                    <p className="text-gray-700 text-sm mb-1">
                      <strong>Client:</strong> {projects[current].client}
                    </p>
                    <p className="text-gray-700 text-sm mb-2">
                      <strong>Tech:</strong> {projects[current].tech}
                    </p>
                    <ul className="list-disc list-inside text-gray-600 text-xs space-y-1">
                      {projects[current].details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            <motion.button
              className="flex-shrink-0 px-2 py-2 bg-gray-200 rounded-full hover:bg-gray-300 text-2xl flex items-center justify-center ml-1 shadow"
              onClick={handleNext}
              aria-label="Next Project"
              whileTap={{ scale: 0.85 }}
              whileHover={{ scale: 1.15 }}
              style={{ zIndex: 2 }}
            >
              <FaChevronRight />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
