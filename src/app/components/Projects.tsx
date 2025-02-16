"use client";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import styles from "../styles/projects.module.css";

// Projects extracted from your resume
const projects = [
  { name: "Library Management System", url: "https://github.com/Janakinathverma/LibraryManagementProject", description: "A system for managing books in a library with an optimized search feature." },
  { name: "Food Delivery App", url: "https://github.com/Janakinathverma/food-del", description: "A MERN stack-based food delivery system with Stripe payment integration." },
  { name: "Map Scraper", url: "https://github.com/Janakinathverma/Map-Scrapper", description: "A Playwright-based scraper to extract data from Google Maps." },
  { name: "Weather Report", url: "https://github.com/Janakinathverma/Weather_report", description: "A real-time weather information website using APIs." },
  { name: "Metro Path Finder", url: "https://github.com/Janakinathverma/MetroApp", description: "A Java program to find the shortest subway route using Dijkstra’s algorithm." }
];

export default function Projects() {
  return (
    <Box className={styles.projectsContainer}>
      <Typography variant="h4" className={styles.projectsTitle}>Projects</Typography>
      <Box className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <Card key={index} className={styles.projectCard}>
            <CardContent>
              <Typography variant="h6" className={styles.projectTitle}>{project.name}</Typography>
              <Typography variant="body2" className={styles.projectDescription}>{project.description}</Typography>
              <Button href={project.url} target="_blank" className={styles.projectLink}>
                View on GitHub
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
