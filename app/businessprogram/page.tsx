"use client"
import { Box, Container, Grid2, Typography, Dialog } from "@mui/material";
import React, { useState } from "react";
import ResponsiveAppBar from "../components/ResponsiveNavbar";
import Image from "next/image";
import Footer from "../components/Footer";
import { Close } from "@mui/icons-material";

const BusinessPage = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>();

    const handleImageClick = (imageSrc: string) => {
        setSelectedImage(imageSrc);
    };

    const handleClosePreview = () => {
        setSelectedImage(null);
    };

    return (
        <Box>
            <ResponsiveAppBar />

            <Box
                sx={{
                    backgroundColor: "#2e2b2b",
                    flexGrow: 1,
                    py: 6,
                }}
            >
                <Container maxWidth="lg">
                    <Typography
                        variant="h2"
                        component="h1"
                        color="white"
                        align="center"
                        sx={{ mb: 6 }}
                    >
                        Business Fair
                    </Typography>

                    <Typography
                        variant="h4"
                        color="white"
                        align="center"
                        sx={{ mb: 6, textDecoration: 'underline' }}
                    >
                        Entrepreneurship fair
                    </Typography>

                    {/* First Card */}
                    <Grid2 container spacing={4} sx={{ mb: 4 }}>
                        <Grid2 size={{ xs: 12, md: 6 }}>
                            <Box
                                sx={{
                                    border: 2,
                                    borderColor: 'white',
                                    padding: 4,
                                    borderRadius: 7,
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                <Typography fontSize={27} color="white">
                                    Experiencing running a business dealing with the front work and backstage responsibilities.
                                </Typography>
                            </Box>
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 6 }}>
                            <Box
                                onClick={() => handleImageClick('/fairb.JPG')}
                                sx={{
                                    position: 'relative',
                                    width: '100%',
                                    height: { xs: '300px', md: '400px' },
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'scale(1.02)'
                                    }
                                }}
                            >
                                <Image
                                    src="/fairb.JPG"
                                    alt="Business Goals"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    priority
                                />
                            </Box>
                        </Grid2>
                    </Grid2>

                    <Typography
                        variant="h4"
                        color="white"
                        align="center"
                        sx={{ mb: 6, textDecoration: 'underline' }}
                    >
                        Sales & profit
                    </Typography>

                    {/* Second Card */}
                    <Grid2 container spacing={4}>
                        <Grid2 size={{ xs: 12, md: 6 }}>
                            <Box
                                sx={{
                                    border: 2,
                                    borderColor: 'white',
                                    padding: 4,
                                    borderRadius: 7,
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                <Typography color="white" fontSize={27}>
                                    After 5 days of the business fair we generated 53,000thb in sale
                                </Typography>
                            </Box>
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 6 }}>
                            <Box
                                onClick={() => handleImageClick('/Noblesales.png')}
                                sx={{
                                    position: 'relative',
                                    width: '100%',
                                    height: { xs: '300px', md: '400px' },
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'scale(1.02)'
                                    }
                                }}
                            >
                                <Image
                                    src="/Noblesales.png"
                                    alt="Profile"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    priority
                                />
                            </Box>
                        </Grid2>
                    </Grid2>
                </Container>
            </Box>

            {/* Image Preview Dialog */}
            <Dialog
                open={!!selectedImage}
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

export default BusinessPage;