import React from "react";
import { Card, CardContent, CardMedia, Typography, Divider } from "@mui/material"

function FeatureCard(data) {
    const { image, title, stage, description, target, category } = data;

    return (
        <Card sx={{ maxWidth: 700, boxShadow: 4, bgcolor: "tertiary.dark", "&:hover": { border:2, borderColor:"quaternary.light", boxShadow:0}}}>
            <CardMedia component="img" height="200" image={`/images/${image}`} alt={title} data-category={category} />
            <Divider />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body1" component="div">
                    Phase: {stage}
                </Typography>
                <Typography variant="body1" component="div">
                    Expected Release: {target}
                </Typography>
                <Typography variant="body1" component="div">
                    Description:
                </Typography>
                <Typography variant="body2" component="div">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default FeatureCard