import React from "react";
import { Card, CardContent, CardMedia, Typography, Divider, Paper, Box, Chip } from "@mui/material";

function FeatureCard(data) {
    const { image, title, stage, description, target, category, assigned, priority } = data;
    return (
        <Card
            sx={{
                maxWidth: 700,
                maxHeight: 550,
                minHeight: 550,
                boxShadow: 4,
                bgcolor: "tertiary.dark",
                border: 2,
                borderColor: "primary.dark",
                "&:hover": { borderColor: "quaternary.light" },
            }}
        >
            <CardContent>
                <Paper sx={{ mb: 1 }}>
                    <Box display="flex" flexDirection="row" justifyContent="space-between" sx={{ px: 1 }}>
                        <Typography variant="subtitle1" component="div">
                            {title}
                        </Typography>
                        <Box display="flex" flexDirection="row" alignItems="center">
                            <Chip
                                label={priority}
                                size="small"
                                sx={{ bgcolor: "tertiary.light", color: "background.default", mr: 0.25 }}
                            />
                            {assigned.map((value, index) => {
                                return (
                                    <img
                                        src={require(`../../images/${value}`)}
                                        key={index}
                                        alt="tag"
                                        style={{ maxHeight: 27, minHeight: 27, maxWidth: 27, marginRight: 2 }}
                                    />
                                );
                            })}
                        </Box>
                    </Box>
                </Paper>
                <CardMedia
                    component="img"
                    image={require(`../../images/${image}`)}
                    alt={title}
                    data-category={category}
                    sx={{
                        objectFit: "scale-down",
                        maxHeight: 200,
                        py: 1,
                        px: 1,

                        bgcolor: "black",
                        border: 2,
                        borderColor: "primary.light",
                        borderStyle: "inset",
                    }}
                />
                <Divider />
                <Paper>
                    <Box
                        display="flex"
                        flexDirection="Row"
                        justifyContent="space-between"
                        sx={{ my: 1, px: 1 }}
                        alignItems="center"
                    >
                        <Typography variant="subtitle1" component="div">
                            Phase: {stage}
                        </Typography>
                        <Chip label={target} size="small" color="success" />
                    </Box>
                </Paper>
                <Typography variant="body2" component="div">
                    <Paper
                        sx={{
                            maxHeight: 210,
                            minHeight: 210,
                            mt: 0.5,
                            boxShadow: 3,
                            p: 0.5,
                            border: 2,
                            borderStyle: "inset",
                            borderColor: "secondary.light",
                            bgcolor: "tertiary.main",
                            color: "background.default",
                        }}
                    >
                        {description}
                    </Paper>
                </Typography>
            </CardContent>
        </Card>
    );
}

export default FeatureCard;
