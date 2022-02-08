import React, { useState } from "react";
import featureData from "../../data/featureData.js";
import categoryData from "../../data/categoryData.js";
import { Grid, Button, Box } from "@mui/material";
import FeatureCard from "../FeatureCard/FeatureCard.js";
const Nav = () => {
    // const [categoryName, setCategoryName] = useState("Category 1");
    return (
        <Box>
            <Box display="flex" justifyContent="center">
                {categoryData.map((btn) => (
                    <Button key={btn.id}>{btn.category}</Button>
                ))}
            </Box>
            <Grid container spacing={4} sx={{ px: 6 }}>
                {featureData.map((card) => (
                    <Grid item xs={3} key={card.id}>
                        <FeatureCard
                            image={card.image}
                            title={card.title}
                            stage={card.stage}
                            description={card.description}
                            target={card.target}
                            category={card.category}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Nav;
