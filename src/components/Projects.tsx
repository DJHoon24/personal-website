// components/Projects.js
import { FC } from "react";
import Image from "next/image";

interface Project {
  image: string;
  title: string;
  link: string;
}
const projects: Project[] = [
  {
    image: "/super.jpg",
    title: "Coursify",
    link: "https://github.com/DJHoon24/Coursify",
  },
  {
    image: "/super.jpg",
    title: "My Mark Manager",
    link: "https://github.com/DJHoon24/My-Mark-Manager",
  },
];

const Projects: FC = () => (
  <section id="projects" className="py-16 bg-accent bg-opacity-10">
    <h2 className="text-4xl font-bold text-primary text-center mb-12">
      Projects
    </h2>
    <div className="container mx-auto px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center md:justify-between">
      {projects.map((p, i) => (
        <a
          key={i}
          href={p.link}
          target="_blank"
          className="card group relative"
        >
          <Image
            src={p.image}
            alt={p.title}
            width={350}
            height={200}
            className="rounded-lg object-cover"
          />
          <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition">
            <span className="text-primary opacity-0 group-hover:opacity-100 font-semibold">
              {p.title}
            </span>
          </div>
        </a>
      ))}
    </div>
  </section>
);
export default Projects;
