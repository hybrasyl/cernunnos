import React from "react";
import { Card, CardContent, CardMedia, Typography, Divider } from "@mui/material"

function FeatureCard(data) {
    const { image, title, stage, description, target, category } = data;

    return (
        <Card sx={{ maxWidth: 400, boxShadow: 4, bgcolor: "tertiary.dark"}}>
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
                    {category}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default FeatureCard