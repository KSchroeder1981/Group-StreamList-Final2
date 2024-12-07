import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Grid,
} from "@mui/material";

const teamMembers = [
  { name: "Jaylene Rodrigues", title: "Project Lead", avatar: "J" },
  { name: "Andrew Saunders", title: "Backend Developer", avatar: "A" },
  { name: "Temi Sobande-Amon", title: "Program Manager", avatar: "T" },
  { name: "Brooke Stanford", title: "UI/UX Designer", avatar: "B" },
  { name: "Felecia Tucker", title: "Tester", avatar: "F" },
  { name: "Kevin Schroeder", title: "Lead Web Developer", avatar: "K" },
];

const About: React.FC = () => {
  return (
    <Box
      sx={{
        padding: "2rem",
        backgroundColor: "#f4f6f8",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <Typography variant="h3" gutterBottom>
        About EZTechMovie
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "2rem" }}>
        EZTechMovie is a fictional streaming platform designed as a capstone
        project to integrate cutting-edge technology with a seamless user
        experience. Our team is dedicated to delivering a product that
        prioritizes innovation, security, and user satisfaction.
      </Typography>

      <Typography variant="h4" gutterBottom>
        Meet Our Team
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                maxWidth: 300,
                margin: "auto",
                backgroundColor: "#ffffff",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <CardContent>
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    margin: "0 auto",
                    backgroundColor: "#6200ea",
                    fontSize: "2rem",
                  }}
                >
                  {member.avatar}
                </Avatar>
                <Typography variant="h6" sx={{ marginTop: "1rem" }}>
                  {member.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {member.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default About;
