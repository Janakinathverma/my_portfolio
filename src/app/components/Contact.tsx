"use client";
import { Box, TextField, Button, Typography, IconButton } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 8,
        px: 3,
        background: "#242424",
        color: "#fff",
        borderRadius: "10px",
      }}
    >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Typography variant="h4" fontWeight="bold">
          Contact Me
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: "600px", mx: "auto", mt: 1 }}>
          Feel free to reach out for any collaborations or just to say hi!
        </Typography>
      </motion.div>

      {/* Contact Form */}
      <Box component="form" sx={{ maxWidth: 500, mx: "auto", mt: 4 }}>
        <TextField fullWidth label="Your Name" variant="outlined" sx={{ mb: 2, bgcolor: "#fff", borderRadius: "5px" }} />
        <TextField fullWidth label="Your Email" variant="outlined" sx={{ mb: 2, bgcolor: "#fff", borderRadius: "5px" }} />
        <TextField
          fullWidth
          label="Your Message"
          variant="outlined"
          multiline
          rows={4}
          sx={{ mb: 2, bgcolor: "#fff", borderRadius: "5px" }}
        />
        <Button variant="contained" color="primary" fullWidth>
          Send Message
        </Button>
      </Box>

      {/* Social Links */}
      <Box sx={{ mt: 4 }}>
        <IconButton href="https://github.com/Janakinathverma" target="_blank">
          <GitHub sx={{ color: "white" }} />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/janaki-nath-verma-b05a51174" target="_blank">
          <LinkedIn sx={{ color: "white" }} />
        </IconButton>
        <IconButton href="mailto:janakinathv@gmail.com">
          <Email sx={{ color: "white" }} />
        </IconButton>
      </Box>
    </Box>
  );
}
