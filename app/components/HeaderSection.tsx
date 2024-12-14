import { Avatar, Box, Typography, Container, Grid2 } from "@mui/material";
import React from "react";

const HeaderSection = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#2e2b2b",
                height: '90vh',
                display: "flex",
                py: 4,
                justifyItems: 'center',
                alignItems: 'center'
            }}
        >
            <Container maxWidth="lg">
                <Grid2
                    container
                    spacing={4}
                    justifyContent="center"
                >
                    <Grid2
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Avatar
                            src="/profile.png"
                            sx={{
                                width: { xs: 200, md: 500 },
                                height: { xs: 200, md: 500 },
                                border: '4px solid white'
                            }}
                        />
                    </Grid2>
                    <Grid2
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Box sx={{
                            textAlign: { xs: "center", sm: "left" },
                            maxWidth: "500px"
                        }}>
                            <Typography
                                variant="h2"
                                component="h1"
                                sx={{
                                    fontWeight: "bold",
                                    mb: 2,
                                    color: "white",
                                    fontSize: { xs: "2.5rem", md: "3.5rem" }
                                }}
                            >
                                Noel Na Nongkhai
                            </Typography>
                            <Typography
                                variant="h5"
                                sx={{
                                    color: "#e0e0e0",
                                    lineHeight: 1.6,
                                    fontSize: { xs: "1.1rem", md: "1.4rem" }
                                }}
                            >
                                I am a passionate student with a strong interest in math, finance, accounting, and bookkeeping. I have a deep love for coding and computer science, and I am  skilled in subjects like math and physics. Learning is a key part of who I am, and I enjoy tackling new challenges. Outside of academics, I am a talented football (soccer) player, and I have a great passion for the sport. I am always eager to grow and expand my knowledge across various fields.
                            </Typography>
                        </Box>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
}

export default HeaderSection;