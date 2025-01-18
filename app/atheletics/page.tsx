import { Box, Avatar, Container, Typography } from "@mui/material";
import React from "react";
import ResponsiveAppBar from "../components/ResponsiveNavbar";
import Image from "next/image";
import Footer from "../components/Footer";
const AtheleticsPage = () => {
    return <Box>
        <ResponsiveAppBar />

        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

                backgroundColor: "#2e2b2b",
                flexDirection: 'column'
            }}
        >
            <Avatar
                src="/icsacademy.png"
                sx={{
                    width: { xs: 200, md: 500 },
                    height: { xs: 200, md: 500 },
                    border: '4px solid white'
                }}
            />
            <Typography sx={{ color: 'white', paddingX: 20, paddingY: 5, textAlign: 'Center', fontSize: 23 }}>
                Our purpose is to develop ICS athletes holistically, physically, academically, and spiritually. As a department, we strive to foster character, servant leadership, and the development of life skills while providing a professional environment in Christian athletics. The athletic program is designed to offer students opportunities to develop their physical skills and abilities as well as self-discipline and leadership potential.
                ICS competes in the Bangkok Metropolitan Schools Athletic Conference (BMAC) & the Asia Christian Schools Conference (ACSC). The purpose of BMAC & ACSC is to provide a well-rounded program of interscholastic athletics for member schools. This includes providing regulations, promoting sportsmanship, and providing enjoyable matches for all participants.
            </Typography>
        </Box>
        <Container>
            <Box>
                <Image src={'/goal.png'} alt={""} width={300} height={500} />
            </Box>
        </Container>
        <Footer />

    </Box>

}
export default AtheleticsPage