// components/Experience.js
import { FC } from "react";
import Image from "next/image";

interface Job {
  logo: string;
  company: string;
  role: string;
  period: string;
}

const jobs: Job[] = [
  {
    logo: "/betterup.jpg",
    company: "BetterUp",
    role: "Software Engineering Intern",
    period: "Sept–Dec 2024",
  },
  {
    logo: "/super.jpg",
    company: "Super.com",
    role: "Software Engineering Intern",
    period: "Jan–Apr 2024 & Sept-Dec 2022",
  },
  {
    logo: "/adp.jpg",
    company: "Lifion by ADP",
    role: "Platform Engineering Intern",
    period: "Jun–Aug 2023",
  },
  {
    logo: "/wish.jpg",
    company: "Wish",
    role: "Software Development Engineer Intern",
    period: "Jan–Apr 2022",
  },
  {
    logo: "/sony.jpg",
    company: "Sony Interactive Entertainment",
    role: "Software Developer Intern",
    period: "May–Aug 2021",
  },
];

const Experience: FC = () => (
  <section id="experience" className="py-16">
    <h2 className="text-4xl font-bold text-primary text-center mb-12">
      Experience
    </h2>
    <div className="container mx-auto px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center">
      {jobs.map((job, i) => (
        <div key={i} className="card flex flex-col items-center text-center">
          <Image src={job.logo} alt={job.company} width={64} height={64} />
          <h3 className="mt-4 font-semibold text-lg text-secondary">
            {job.role}
          </h3>
          <p className="text-sm text-foreground mt-1">{job.company}</p>
          <p className="text-xs text-foreground opacity-75">{job.period}</p>
        </div>
      ))}
    </div>
  </section>
);
export default Experience;
