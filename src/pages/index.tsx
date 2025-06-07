import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const Home: NextPage = () => (
  <>
    <Navbar />
    <Hero />
    <Experience />
    <Projects />
    <Footer />
  </>
);

export default Home;
