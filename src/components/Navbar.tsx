import { FC } from "react";
import Link from "next/link";

const Navbar: FC = () => (
  <nav className="fixed w-full backdrop-blur-md shadow-md z-50">
    <div className="container mx-auto flex justify-between items-center p-4">
      <Link href="#hero" className="text-2xl font-bold text-primary">
        DJ
      </Link>
      <div className="space-x-8">
        <Link href="#experience" className="hover:text-accent">
          Experience
        </Link>
        <Link href="#projects" className="hover:text-accent">
          Projects
        </Link>
        <Link href="#contact" className="hover:text-accent">
          Contact
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
