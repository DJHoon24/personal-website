import React from "react";

const Footer: React.FC = () => (
  <footer className="bg-gray-100 py-4 mt-12">
    <div className="container mx-auto text-center">
      <p>© {new Date().getFullYear()} DongHoon Jeong. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
