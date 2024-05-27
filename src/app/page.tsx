import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Hireme from "./components/Hireme";
import Project from "./components/Project";
import Recomendation from "./components/Recomendation";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Hireme />
      <Project />
      <Recomendation />
      <Footer /> 
    </main>
  );
}
