import React from "react";
import { Card, CardContent, CardMedia, Typography, Divider, Paper, Box } from "@mui/material";

function FeatureCard(data) {
    const { image, title, stage, description, target, category } = data;

    return (
        <Card
            sx={{
                maxWidth: 700,
                maxHeight: 500,
                minHeight: 500,
                boxShadow: 4,
                bgcolor: "tertiary.dark",
                "&:hover": { border: 2, borderColor: "quaternary.light", boxShadow: 0 },
            }}
        >
            <CardMedia
                component="img"
                image={require(`../../images/${image}`)}
                alt={title}
                data-category={category}
                sx={{ objectFit: "scale-down", maxHeight: 200, py: 1, px: 1, bgcolor:"black", border: 2, borderColor: "primary.dark", }}
            />
            <CardContent sx={{ border:2, borderColor: "primary.dark"}}>
                <Typography gutterBottom variant="h5" component="div" textAlign="center">
                    {title}
                </Typography>
                <Divider />
                <Box display="flex" flexDirection="row" justifyContent="space-between" sx={{ mb: 1 }}>
                    <Typography variant="body1" component="div">
                        Phase: {stage}
                    </Typography>
                    <Typography variant="body1" component="div">
                        Expected Release: {target}
                    </Typography>
                </Box>
                <Typography variant="body1" component="div">
                    Description:
                </Typography>
                <Typography variant="body2" component="div">
                    <Paper sx={{ maxHeight: 160, minHeight: 160, mt: 0.5, boxShadow: 3, p: 0.5, border:2, borderStyle: "inset", borderColor:"secondary.light", bgcolor: "tertiary.main"}}>{description}</Paper>
                </Typography>
            </CardContent>
        </Card>
    );
}

export default FeatureCard;
