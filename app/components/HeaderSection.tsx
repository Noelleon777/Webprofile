"use client"
import { Avatar, Box, Typography, Container, Grid2, Dialog } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import { Close } from "@mui/icons-material";

const HeaderSection = () => {
    const [openPreview, setOpenPreview] = useState(false);

    const handleOpenPreview = () => {
        setOpenPreview(true);
    };

    const handleClosePreview = () => {
        setOpenPreview(false);
    };

    return (
        <>
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
                                onClick={handleOpenPreview}
                                sx={{
                                    width: { xs: 200, md: 500 },
                                    height: { xs: 200, md: 500 },
                                    border: '4px solid white',
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'scale(1.1)',
                                        cursor: 'pointer'
                                    }
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
                                    I am a passionate student with a strong interest in math, finance, accounting, and bookkeeping. I have a deep love for coding and computer science, and I am skilled in subjects like math and physics. Learning is a key part of who I am, and I enjoy tackling new challenges. Outside of academics, I am a talented football (soccer) player, and I have a great passion for the sport. I am always eager to grow and expand my knowledge across various fields.
                                </Typography>
                            </Box>
                        </Grid2>
                    </Grid2>
                </Container>
            </Box>

            {/* Image Preview Dialog */}
            <Dialog
                open={openPreview}
                onClose={handleClosePreview}
                maxWidth="xl"
                onClick={handleClosePreview}
            >
                <Box
                    sx={{
                        position: 'relative',
                        backgroundColor: 'black',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {/* Close button */}
                    <Close
                        onClick={handleClosePreview}
                        sx={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            color: 'white',
                            cursor: 'pointer',
                            zIndex: 1,
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            borderRadius: '50%',
                            padding: 1,
                            '&:hover': {
                                backgroundColor: 'rgba(0,0,0,0.7)',
                            }
                        }}
                    />

                    <Box
                        sx={{
                            position: 'relative',
                            width: { xs: '90vw', sm: '80vw', md: '70vw' },
                            height: { xs: '90vw', sm: '80vw', md: '70vw' },
                            maxWidth: '1000px',
                            maxHeight: '1000px',
                        }}
                    >
                        <Image
                            src="/profile.png"
                            alt="Profile Preview"
                            fill
                            style={{
                                objectFit: 'contain',
                            }}
                            quality={100}
                            priority
                        />
                    </Box>
                </Box>
            </Dialog>
        </>
    );
};

export default HeaderSection;