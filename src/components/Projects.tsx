import { FC } from "react";
import Image from "next/image";

interface Project {
  image: string;
  title: string;
  link: string;
}
const projects: Project[] = [
  {
    image: "/super.jpeg",
    title: "Coursify",
    link: "https://github.com/DJHoon24/Coursify",
  },
  {
    image: "/super.jpeg",
    title: "My Mark Manager",
    link: "https://github.com/DJHoon24/My-Mark-Manager",
  },
];

const Projects: FC = () => (
  <section id="projects" className="py-16">
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, idx) => (
          <a
            key={idx}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
          >
            <div className="relative h-48">
              <Image
                src={proj.image}
                alt={proj.title}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-6 flex justify-between items-center">
              <h3 className="text-xl font-semibold transition group-hover:text-primary">
                {proj.title}
              </h3>
              <span className="opacity-0 group-hover:opacity-100 transition">
                🔗
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
