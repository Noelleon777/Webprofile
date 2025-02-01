"use client"
import { Box, Container, Grid2, Typography } from "@mui/material";
import React from "react";

const SkillSection = () => {

    const skills = [
        {
            name: "PYTHON",
            bgColor: "#0047AB",
            textColor: "#FFFF00",
            url: "https://www.python.org/"
        },
        {
            name: "HTML,CSS",
            bgColor: "#FFA500",
            textColor: "#0096FF",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTML"
        },
        {
            name: "REACT",
            bgColor: "#89CFF0",
            textColor: "#FFFFFF",
            url: "https://react.dev/"
        },
        {
            name: "React-NATIVE",
            bgColor: "#000000",
            textColor: "#89CFF0",
            url: "https://reactnative.dev/"
        },
        {
            name: "NodeJS",
            bgColor: "#808080",
            textColor: "#454B1B",
            url: "https://nodejs.org/"
        }
    ];

    return (
        <Container maxWidth="lg">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    py: 5
                }}
            >
                <Typography
                    variant="h2"
                    component="h1"
                    textAlign="center"
                    sx={{
                        mb: 5,
                        fontSize: { xs: '2.5rem', md: '3.5rem' }
                    }}
                >
                    My Skills
                </Typography>

                <Grid2
                    container
                    spacing={3}
                    sx={{
                        justifyContent: 'center',
                        maxWidth: '1200px',
                        margin: '0 auto'
                    }}
                >
                    {skills.map((skill, index) => (
                        <Grid2
                            key={index}
                            size={{ xs: 12, sm: 6, md: 4 }}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <Box
                                component="a"
                                href={skill.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    backgroundColor: skill.bgColor,
                                    padding: 3,
                                    borderRadius: 18,
                                    width: '100%',
                                    maxWidth: { xs: '280px', md: '320px' },
                                    transition: 'all 0.2s ease-in-out',
                                    textDecoration: 'none',
                                    display: 'block',
                                    cursor: 'pointer',
                                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                    '&:hover': {
                                        transform: 'scale(1.05) translateY(-4px)',
                                        boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
                                    },
                                    '&:active': {
                                        transform: 'scale(0.98)',
                                    }
                                }}
                            >
                                <Typography
                                    textAlign="center"
                                    fontWeight="bold"
                                    color={skill.textColor}
                                    sx={{
                                        fontSize: { xs: '1.1rem', md: '1.25rem' },
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px'
                                    }}
                                >
                                    {skill.name}
                                </Typography>
                            </Box>
                        </Grid2>
                    ))}
                </Grid2>
            </Box>
        </Container>
    )

}
export default SkillSection