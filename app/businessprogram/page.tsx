import { Box, Container, Grid2, Typography } from "@mui/material";
import React from "react";
import ResponsiveAppBar from "../components/ResponsiveNavbar";
import Image from "next/image";
const BusinessPage = () => {
    return <Box>
        <ResponsiveAppBar />
        <Box sx={{
            backgroundColor: "#2e2b2b",
            height: '90vh',
            display: "flex",
            py: 4,
            justifyItems: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            <Typography variant="h1" color="white"> Business Fair </Typography>
            <Container>
                <Grid2 container>
                    <Grid2 size={6} >
                        <Box sx={{
                            border: 2, borderColor: 'white', padding: 5, borderRadius: 7
                        }}>
                            <Typography color="white">As a teen, I took on the challenge of running my own food stall at a week-long local school fair, where I served up delicious Wagyu Beef Fried Rice. This experience gave me hands-on exposure to the full spectrum of running a business—from managing a team and handling logistics to perfecting my cooking skills. Throughout the week, I learned how to balance customer demand, problem-solve on the fly, and keep everything running smoothly in a fast-paced environment. I also gained valuable insight into marketing and team coordination, which were essential in making the event a success. It was an incredible opportunity to apply my passion for cooking while developing essential business skills in a real-world setting.</Typography>
                        </Box>
                    </Grid2>
                    <Grid2 size={6}>
                        <Image src="/goal.png" width={300} height={300} alt={""} />
                    </Grid2>
                    <Grid2 size={6} >
                        <Box sx={{
                            border: 2, borderColor: 'white', padding: 5, borderRadius: 7
                        }}>
                            <Typography color="white">While serving up delicious Wagyu Beef Fried Rice at the school fair, I also took on the crucial behind-the-scenes responsibilities of managing the financial side of the business. I handled everything from calculating profits and expenses to creating detailed business dossiers, financial balance sheets, and tax calculations. I also kept track of bookkeeping and accounting, ensuring that all transactions were recorded accurately and that I had a clear picture of the business’s financial health. This experience helped me develop a strong understanding of how to run a sustainable business, manage cash flow, and make data-driven decisions. Balancing both the hands-on and financial aspects of the operation gave me invaluable skills in business strategy and financial management.

                            </Typography>
                        </Box>
                    </Grid2>
                    <Grid2 size={6}>
                        <Image src="/goal.png" width={300} height={300} alt={""} />
                    </Grid2>
                </Grid2>
            </Container>

        </Box>
    </Box>

}
export default BusinessPage