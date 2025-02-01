"use client"
import { Box, Avatar, Container, Typography, Grid2, Dialog } from "@mui/material";
import React, { useState } from "react";
import ResponsiveAppBar from "../components/ResponsiveNavbar";
import Image from "next/image";
import Footer from "../components/Footer";
import { Close } from "@mui/icons-material";

const AthleticsPage = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const images = [
        { src: '/IMG_6617.JPG', alt: 'Athletics Image 1' },
        { src: '/IMG_6620.JPG', alt: 'Athletics Image 2' },
        { src: '/IMG_6623.JPG', alt: 'Athletics Image 3' },
    ];

    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <ResponsiveAppBar />

            {/* Hero Section */}
            <Box
                sx={{
                    backgroundColor: "#2e2b2b",
                    py: { xs: 4, md: 6 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Avatar
                    src="/icsacademy.png"
                    onClick={() => setSelectedImage("/icsacademy.png")}
                    sx={{
                        width: { xs: 200, sm: 300, md: 400 },
                        height: { xs: 200, sm: 300, md: 400 },
                        border: '4px solid white',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                            transform: 'scale(1.05)',
                        }
                    }}
                />

                <Container maxWidth="lg">
                    <Typography
                        sx={{
                            color: 'white',
                            py: { xs: 3, md: 5 },
                            px: { xs: 2, sm: 4, md: 8 },
                            textAlign: 'center',
                            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' },
                            lineHeight: 1.6
                        }}
                    >
                        Our purpose is to develop ICS athletes holistically, physically, academically, and spiritually. As a department, we strive to foster character, servant leadership, and the development of life skills while providing a professional environment in Christian athletics. The athletic program is designed to offer students opportunities to develop their physical skills and abilities as well as self-discipline and leadership potential.
                        <br /><br />
                        ICS competes in the Bangkok Metropolitan Schools Athletic Conference (BMAC) & the Asia Christian Schools Conference (ACSC). The purpose of BMAC & ACSC is to provide a well-rounded program of interscholastic athletics for member schools. This includes providing regulations, promoting sportsmanship, and providing enjoyable matches for all participants.
                    </Typography>
                </Container>
            </Box>

            {/* Gallery Section */}
            <Container sx={{ py: { xs: 4, md: 6 } }}>
                <Typography
                    variant="h2"
                    component="h1"
                    textAlign="center"
                    sx={{
                        fontSize: { xs: '2.5rem', md: '3.5rem' },
                        mb: { xs: 3, md: 4 },
                        fontWeight: 'bold'
                    }}
                >
                    Gallery
                </Typography>

                <Grid2 container spacing={3}>
                    {images.map((image, index) => (
                        <Grid2 key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                            <Box
                                onClick={() => setSelectedImage(image.src)}
                                sx={{
                                    position: 'relative',
                                    width: '100%',
                                    height: { xs: '300px', sm: '400px' },
                                    borderRadius: 4,
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'scale(1.02)',
                                        boxShadow: '0 8px 30px rgba(0,0,0,0.12)'
                                    }
                                }}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                                    priority={index < 4}
                                />
                            </Box>
                        </Grid2>
                    ))}
                </Grid2>
            </Container>

            {/* Image Preview Dialog */}
            <Dialog
                open={!!selectedImage}
                onClose={() => setSelectedImage(null)}
                maxWidth="xl"
                onClick={() => setSelectedImage(null)}
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
                    <Close
                        onClick={() => setSelectedImage(null)}
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
                        {selectedImage && (
                            <Image
                                src={selectedImage}
                                alt="Preview"
                                fill
                                style={{ objectFit: 'contain' }}
                                quality={100}
                                priority
                            />
                        )}
                    </Box>
                </Box>
            </Dialog>

            <Footer />
        </Box>
    );
};

export default AthleticsPage;