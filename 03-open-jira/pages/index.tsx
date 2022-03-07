import { Typography } from "@mui/material";
import type { NextPage } from "next";
import { MainLayout } from "../components/layouts";

const Home: NextPage = () => {
    return (
        <MainLayout title="Home - OpenJira">
            <Typography variant="h1" color="primary">
                HOMEPAGE
            </Typography>
        </MainLayout>
    );
};

export default Home;
