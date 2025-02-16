"use client";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import styles from "../styles/about.module.css";

const skills = [
  "JavaScript (ES6+)",
  "React.js & Next.js",
  "Node.js & Express.js",
  "MongoDB & SQL",
  "Material UI & Tailwind",
  "REST APIs & GraphQL",
  "Git & GitHub",
];

export default function About() {
  return (
    <Box className={styles.aboutContainer}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h4" fontWeight="bold">About Me</Typography>
        <Typography variant="body1" sx={{ maxWidth: "800px", mx: "auto", mt: 2 }}>
          I am a passionate Full-Stack Web Developer with expertise in the **MERN stack**.
          I enjoy building high-quality web applications and solving complex technical challenges.
          Currently, I am focused on **Next.js & modern UI frameworks** to create fast and interactive web experiences.
        </Typography>
      </motion.div>

      {/* Skills Section */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" fontWeight="bold">Technical Skills</Typography>
        <Grid container spacing={2} justifyContent="center" className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <Grid item key={index}>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Paper className={styles.skillCard}>
                  {skill}
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
