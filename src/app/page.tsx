"use client"; // Ensures the entire page renders on the client

import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Sidebar on the Left */}
      <div className={styles.sidebar}>
        <Hero />
      </div>

      {/* Full-Width Main Content */}
      <div className={styles.mainContent}>
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
