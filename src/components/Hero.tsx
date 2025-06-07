import { FC } from "react";
import { motion } from "framer-motion";

const Hero: FC = () => (
  <section
    id="hero"
    className="h-screen flex items-center bg-gradient-to-r from-primary to-indigo-400"
  >
    <div className="container mx-auto text-white p-4">
      <motion.h1
        className="text-5xl font-extrabold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hello, I'm DJ
      </motion.h1>
      <motion.p
        className="text-xl mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        I build web applications with Next.js, React, and TypeScript.
      </motion.p>
      <motion.a
        href="#projects"
        className="inline-block bg-accent text-white px-6 py-3 rounded-lg font-medium"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View Projects
      </motion.a>
    </div>
  </section>
);

export default Hero;
