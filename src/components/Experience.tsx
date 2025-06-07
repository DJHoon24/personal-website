import { FC } from "react";
import Image from "next/image";

interface Job {
  logo: string;
  company: string;
  role: string;
  period: string;
  description: string;
}
const jobs: Job[] = [
  {
    logo: "/super.jpeg",
    company: "BetterUp",
    role: "Software Engineering Intern",
    period: "Sept – Dec 2024",
    description: "PAD Squad",
  },
  {
    logo: "/super.jpeg",
    company: "Super.com",
    role: "Software Engineering Intern",
    period: "Jan – Apr 2024",
    description: "Travel Team",
  },
  {
    logo: "/adp.jpeg",
    company: "Lifion by ADP",
    role: "Platform Engineering Intern",
    period: "Jun – Aug 2023",
    description: "Platform Team",
  },
  {
    logo: "/super.jpeg",
    company: "Sony Interactive Entertainment",
    role: "Software Developer Intern",
    period: "May – Aug 2021",
    description: "Payments Team",
  },
];

const Experience: FC = () => (
  <section id="experience" className="py-16 bg-gray-50">
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {jobs.map((job, idx) => (
          <div
            key={idx}
            className="flex items-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
          >
            <div className="w-20 h-20 relative mr-6">
              <Image
                src={job.logo}
                alt={job.company}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary">{job.role}</h3>
              <p className="text-sm text-gray-500">
                {job.company} &middot; {job.period}
              </p>
              <p className="mt-2 text-gray-700">{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
