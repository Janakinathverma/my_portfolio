"use client";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ py: 2, textAlign: "center", background: "#121212", color: "#bbb" }}>
      <Typography variant="body2">
        © {new Date().getFullYear()} Janaki Nath Verma. All rights reserved.
      </Typography>
    </Box>
  );
}
