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
                    <Box sx={{ backgroundColor: "#7EC8E3", padding: 3, borderRadius: 18, justifyContent: "center", alignItems: "center", width: { xs: '80%', md: '80%' } }}>
                        <Typography textAlign={"center"} fontWeight={'bold'}>Python</Typography>
                    </Box>
                </Grid2>
                <Grid2 size={{ xs: 12, md: 4 }}>
                    <Box>
                        <Typography>HTML,CSS</Typography>

                    </Box>
                </Grid2>
                <Grid2 size={{ xs: 12, md: 4 }}>
                    <Box>
                        <Typography>React</Typography>

                    </Box>
                </Grid2>
                <Grid2 size={{ xs: 12, md: 4 }}>
                    <Box>
                        <Typography>React-Native</Typography>

                    </Box>
                </Grid2>
                <Grid2 size={{ xs: 12, md: 4 }} >
                    <Box>
                        <Typography>NodeJS</Typography>
                    </Box>
                </Grid2>
            </Grid2>
        </Box> </Container>

}
export default SkillSection