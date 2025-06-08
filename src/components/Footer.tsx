// components/Footer.js
import React from "react";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 mt-12">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <div className="flex space-x-6">
          <a
            href="https://github.com/DJHoon24"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-600 hover:text-gray-800 transition"
          >
            <Github size={64} />
          </a>
          <a
            href="https://www.linkedin.com/in/donghoon-jeong/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-600 hover:text-gray-800 transition"
          >
            <Linkedin size={64} />
          </a>
        </div>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} DongHoon Jeong. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
