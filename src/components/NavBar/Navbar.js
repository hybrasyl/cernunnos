import React, { useState, useEffect } from "react";
import featureData from "../../data/featureData.js";
import { Grid, Button, Box, Divider } from "@mui/material";
import FeatureCard from "../FeatureCard/FeatureCard.js";
const Nav = () => {
    const uniques = [...new Set(featureData.map((item) => item.category))];
    const [categoryName, setCategoryName] = useState("All");
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(featureData);
    }, []);

    useEffect(() => {
        setCards();
        if (categoryName === "All") {
            const filtered = featureData.map((data) => ({
                ...data,
                filtered: data.category.includes("Category 1"),
            }));
            setCards(filtered);
        } else {
            const filtered = featureData.map((data) => ({
                ...data,
                filtered: data.category.includes(categoryName.cat),
            }));
            setCards(filtered);
        }
    }, [categoryName]);

    return (
        <Box>
            <Box display="flex" justifyContent="center" sx={{ bgcolor: "primary.light", p:1 }}>
                {uniques.map((cat, index) => (
                    <Button
                        key={index}
                        variant="contained"
                        active={cat === categoryName ? "true" : undefined}
                        sx={{ mx: 1 }}
                        onClick={() => setCategoryName({ cat })}
                    >
                        {cat}
                    </Button>
                ))}
            </Box>
            <Grid container spacing={4} sx={{ px: 6, pt: 1 }}>
                {cards.map((card) =>
                    card.filtered === true ? (
                        <Grid item xs={12} sm={6} md={4} xl={2} key={card.id}>
                            <FeatureCard
                                image={card.image}
                                title={card.title}
                                stage={card.stage}
                                description={card.description}
                                target={card.target}
                                category={card.category}
                            />
                        </Grid>
                    ) : (
                        ""
                    )
                )}
            </Grid>
        </Box>
    );
};

export default Nav;
