"use client"; // Ensures this is a Client Component

import Image from "next/image";
import { Typography, Button, Stack } from "@mui/material";
import styles from "../styles/hero.module.css";
import profilePic from "../assets/profile.jpg";

export default function Hero() {
  // Safe scrolling function
  const scrollToContact = () => {
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // ✅ Small delay ensures DOM is ready
  };

  return (
    <div className={styles.heroContainer}>
      <div className={styles.profileWrapper}>
        <Image
          src={profilePic}
          alt="Profile Picture"
          width={120}
          height={120}
          className={styles.profileImage}
          unoptimized={true} // ✅ Prevents SSR mismatch
        />
      </div>

      <Typography variant="h4" className={styles.heroTitle}>
        Janaki Nath Verma
      </Typography>
      <Typography variant="body1" className={styles.heroSubtitle}>
        Full-Stack Web Developer | MERN Stack Specialist
      </Typography>

      <Stack className={styles.buttonGroup}>
        <Button
          variant="contained"
          color="secondary"
          href="/resume.pdf"
          download="JanakiNath_Resume.pdf"
          className={styles.button}
        >
          Download Resume
        </Button>

        <Button
          variant="outlined"
          onClick={scrollToContact} // ✅ No more null errors!
          className={styles.button}
        >
          Contact Me
        </Button>
      </Stack>
    </div>
  );
}
