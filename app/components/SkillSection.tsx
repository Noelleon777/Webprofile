"use client"
import { Box, Container, Grid2, Typography } from "@mui/material";
import React from "react";

const SkillSection = () => {
    return <Container>
        <Box >
            <Typography variant="h1" textAlign={"center"}>
                My Skills
            </Typography>
            <Grid2 container marginTop={5}>
                <Grid2 size={{ xs: 12, md: 4 }} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '0 auto',

                }}>
                    <Box sx={{ backgroundColor: "#0047AB", padding: 3, borderRadius: 18, justifyContent: "center", alignItems: "center", width: { xs: '80%', md: '80%' } }}>
                        <Typography textAlign={"center"} fontWeight={'bold'} color={'#FFFF00'}>PYTHON</Typography>
                    </Box>
                </Grid2>
                <Grid2 size={{ xs: 12, md: 4 }}>
                    <Box sx={{ backgroundColor: "#FFA500", padding: 3, borderRadius: 18, justifyContent: "center", alignItems: "center", width: { xs: '80%', md: '80%' } }}>
                        <Typography textAlign={"center"} fontWeight={'bold'} color={'#0096FF'}>HTML,CSS</Typography>
                    </Box>
                </Grid2>
                <Grid2 size={{ xs: 12, md: 4 }}>
                    <Box sx={{ backgroundColor: "#89CFF0", padding: 3, borderRadius: 18, justifyContent: "center", alignItems: "center", width: { xs: '80%', md: '80%' } }}>
                        <Typography textAlign={"center"} fontWeight={'bold'} color={'#FFFFFF'}>REACT</Typography>
                    </Box>
                </Grid2>
                <Grid2 size={{ xs: 12, md: 4 }}>
                    <Box sx={{ backgroundColor: "#000000", padding: 3, borderRadius: 18, justifyContent: "center", alignItems: "center", width: { xs: '80%', md: '80%' } }}>
                        <Typography textAlign={"center"} fontWeight={'bold'} color={'#89CFF0'}>React-NATIVE</Typography>

                    </Box>

                </Grid2>
                <Grid2 size={{ xs: 12, md: 4 }} >
                    <Box sx={{ backgroundColor: "#808080", padding: 3, borderRadius: 18, justifyContent: "center", alignItems: "center", width: { xs: '80%', md: '80%' } }}>
                        <Typography textAlign={"center"} fontWeight={'bold'} color={'#454B1B'}>NodeJS</Typography>
                    </Box>
                </Grid2>
            </Grid2>
        </Box> </Container>

}
export default SkillSection