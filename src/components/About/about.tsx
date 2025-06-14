"use client";

import { div } from "motion/react-client";

export default function About() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="max-w-5xl w-full py-8 sm:py-8 px-6 sm:px-6 rounded-lg">
          <h1 className="text-3xl text-center font-bold mb-4">About Me</h1>
          <p className="mb-4 text-gray-700 indent-8">
            Hello! I’m Praveen Kumar Alugoju, a passionate Front-End Developer
            based in Hyderabad, India. I specialize in building modern,
            high-performance, and accessible web applications using React,
            Next.js, and other cutting-edge technologies.
          </p>
          <p className="mb-4 text-gray-700 indent-8">
            With a keen eye for detail and a love for clean, maintainable code,
            I enjoy transforming complex problems into elegant, user-friendly
            solutions. I thrive in collaborative environments and am always
            eager to learn new tools and frameworks to stay at the forefront of
            web development.
          </p>
          <p className="mb-4 text-gray-700 indent-8">
            When I’m not coding, you’ll find me exploring new tech trends,
            contributing to open-source projects, or enjoying a good book. Let’s
            connect and create something amazing together!
          </p>
        </div>
      </div>
    </>
  );
}
