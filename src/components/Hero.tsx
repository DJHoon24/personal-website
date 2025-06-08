// components/Hero.js
import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero: FC = () => (
  <section
    id="hero"
    className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-primary to-secondary text-background"
  >
    <Image
      src="/profile.jpg"
      alt="Profile"
      width={250}
      height={250}
      className="rounded-full mb-8 border-4 border-accent"
    />

    <motion.div
      className="text-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-6xl font-extrabold mb-4"
        initial={{ y: -30 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Hey, I’m DongHoon (DJ)
      </motion.h1>
      <motion.p
        className="text-xl mb-8 text-secondary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Gamer & Sports-Stats Enthusiast looking to make a difference through
        code.
      </motion.p>
      <motion.a
        href="https://drive.google.com/file/d/1abO9GdHCcIfX1PkaRaO2RH4mTFuaN80K"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-3 bg-background text-primary font-semibold rounded-full shadow-lg"
        whileHover={{ scale: 1.05 }}
      >
        See Resume
      </motion.a>
    </motion.div>
  </section>
);
export default Hero;
