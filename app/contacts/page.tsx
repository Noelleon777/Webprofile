import { Avatar, Box, Typography, Container, Grid2 } from "@mui/material";
import React from "react";
import ResponsiveAppBar from "../components/ResponsiveNavbar";
import { Email, Instagram, Person } from "@mui/icons-material";
import { Phone } from "lucide-react";
import Footer from "../components/Footer";

const Contact = () => {
    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <ResponsiveAppBar />

            <Box
                sx={{
                    backgroundColor: "white",
                    flexGrow: 1,
                    py: { xs: 4, md: 6 },
                    display: "flex",
                    alignItems: "center"
                }}
            >
                <Container maxWidth="lg">
                    <Grid2
                        container
                        spacing={{ xs: 4, md: 6 }}
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Grid2
                            size={{ xs: 12, md: 6 }}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <Avatar
                                src="/contact.jpg"
                                sx={{
                                    width: { xs: 240, sm: 300, md: 400, lg: 500 },
                                    height: { xs: 240, sm: 300, md: 400, lg: 500 },
                                    border: '4px solid white',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        cursor: 'pointer'
                                    }
                                }}
                            />
                        </Grid2>

                        <Grid2
                            size={{ xs: 12, md: 6 }}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <Box
                                sx={{
                                    width: '100%',
                                    maxWidth: "500px",
                                    display: "flex",
                                    gap: 3,
                                    flexDirection: "column",
                                    px: { xs: 2, sm: 4 }
                                }}
                            >
                                <Typography
                                    variant="h2"
                                    component="h1"
                                    sx={{
                                        fontWeight: "bold",
                                        fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                                        textAlign: { xs: "center", md: "left" },
                                        mb: { xs: 2, md: 4 }
                                    }}
                                >
                                    Feel free to contact me
                                </Typography>

                                {/* Contact Links */}
                                <Box sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 2.5
                                }}>
                                    <a href="http://www.instagram.com/Noell_Na_Nongkhai" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <Box sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            transition: 'transform 0.2s',
                                            '&:hover': {
                                                transform: 'translateX(8px)'
                                            }
                                        }}>
                                            <Person sx={{ fontSize: { xs: 24, md: 28 } }} />
                                            <Box width={12} />
                                            <Typography sx={{ fontSize: { xs: '1rem', md: '1.1rem' } }}>
                                                Noel Athithan Na Nongkhai
                                            </Typography>
                                        </Box>
                                    </a>

                                    <a href="mailto:athithaan@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <Box sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            transition: 'transform 0.2s',
                                            '&:hover': {
                                                transform: 'translateX(8px)'
                                            }
                                        }}>
                                            <Email sx={{ fontSize: { xs: 24, md: 28 } }} />
                                            <Box width={12} />
                                            <Typography sx={{ fontSize: { xs: '1rem', md: '1.1rem' } }}>
                                                athithaan@gmail.com
                                            </Typography>
                                        </Box>
                                    </a>

                                    <a href="tel:+66929628115" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <Box sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            transition: 'transform 0.2s',
                                            '&:hover': {
                                                transform: 'translateX(8px)'
                                            }
                                        }}>
                                            <Phone size={24} />
                                            <Box width={12} />
                                            <Typography sx={{ fontSize: { xs: '1rem', md: '1.1rem' } }}>
                                                +66 92 962 8115
                                            </Typography>
                                        </Box>
                                    </a>

                                    <a href="http://www.instagram.com/Noell_Na_Nongkhai"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'none', color: 'inherit' }}
                                    >
                                        <Box sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            transition: 'transform 0.2s',
                                            '&:hover': {
                                                transform: 'translateX(8px)'
                                            }
                                        }}>
                                            <Instagram sx={{ fontSize: { xs: 24, md: 28 } }} />
                                            <Box width={12} />
                                            <Typography sx={{ fontSize: { xs: '1rem', md: '1.1rem' } }}>
                                                @Noell_Na_Nongkhai
                                            </Typography>
                                        </Box>
                                    </a>
                                </Box>
                            </Box>
                        </Grid2>
                    </Grid2>
                </Container>
            </Box>

            <Footer />
        </Box>
    );
};

export default Contact;