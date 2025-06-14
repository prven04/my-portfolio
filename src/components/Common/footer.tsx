"use client";
import React from "react";
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
        <p className="text-sm">
          Built with{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Next.js
          </a>
        </p>
      </div>
    </footer>
  );
}
