import { Avatar, Box, Typography, Container, Grid2 } from "@mui/material";
import React from "react";
import ResponsiveAppBar from "../components/ResponsiveNavbar";
import { Email, Instagram, Person } from "@mui/icons-material";
import { Phone } from "lucide-react";
import Footer from "../components/Footer";

const Contact = () => {
    return (
        <Box><ResponsiveAppBar />
            <Box
                sx={{
                    backgroundColor: "#white",
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
                                src="/contact.jpg"
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
                                maxWidth: "500px",
                                display: "flex",
                                gap: 2,
                                flexDirection: "column"
                            }}>
                                <Typography
                                    variant="h2"
                                    component="h1"
                                    sx={{
                                        fontWeight: "bold",
                                        mb: 2,

                                        fontSize: { xs: "2.5rem", md: "3.5rem" }
                                    }}
                                >
                                    Feel free to contact me

                                </Typography>
                                <a href="http://www.instagram.com/Noell_Na_Nongkhai">
                                    <Box sx={{ display: "flex   " }}>
                                        <Person />
                                        <Box width={7}> </Box>
                                        <Typography>
                                            Noel Athithan Na Nongkhai
                                        </Typography>
                                    </Box>
                                </a>
                                <a>
                                    <Box sx={{ display: "flex   " }}>
                                        <Email />
                                        <Box width={7}> </Box>
                                        <Typography>
                                            athithaan@gmail.com
                                        </Typography>
                                    </Box>
                                </a>
                                <a>
                                    <Box sx={{ display: "flex   " }}>
                                        <Phone />
                                        <Box width={7}> </Box>
                                        <Typography>
                                            +66 92 962 8115

                                        </Typography>
                                    </Box>
                                </a>
                                <a href="http://www.instagram.com/Noell_Na_Nongkhai">
                                    <Box sx={{ display: "flex   " }}>
                                        <Instagram />
                                        <Box width={7}> </Box>
                                        <Typography>
                                            @Noell_Na_Nongkhai
                                        </Typography>
                                    </Box>
                                </a>

                            </Box>
                        </Grid2>
                    </Grid2>
                </Container>
                <Footer />
            </Box></Box>
    );
}

export default Contact;