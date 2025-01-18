
import { Box, Container, Typography } from "@mui/material";
import react from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <Box sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: 'black'

        }}>
            <Container maxWidth="lg">
                <Box>
                    <Typography sx={{ color: 'white' }}>
                        &copy; {currentYear} Noel nn.All rights reserved.
                    </Typography>

                </Box>

            </Container>
        </Box>
    )

}

export default Footer