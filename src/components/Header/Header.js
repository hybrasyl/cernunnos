import React from "react";
import { Box, Typography, Tooltip, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import HelpButton from "../HelpButton/HelpButton.js"

const Header = () => {
    return (
        <Box display="flex" flexDirection="row" justifyContent="space-between" sx={{ bgcolor: "primary.dark", pb: 1 }}>
            <Typography component="div" sx={{ ml: 1, typography: { xs: "h6", sm: "h4", md: "h4", lg: "h3" } }}>
                Hybrasyl Roadmap
            </Typography>
            <Box display="flex" justifyContent="flex-end" alignItems="center">
                <Tooltip title="Hybrasyl.com" href="https://www.hybrasyl.com" target="_blank" rel="noreferrer">
                    <IconButton
                        size="small"
                        sx={{
                            mx: 1,
                            border: 1,
                            bgcolor: "tertiary.dark",
                            color: "white",
                            boxShadow: 10,
                            maxHeight: 40,
                            maxWidth: 40,
                            "&:hover": { boxShadow: 0, bgcolor: "secondary.dark" },
                        }}
                    >
                        <HomeIcon
                            sx={{
                                fontSize: { xs: 20, sm: 30, md: 40 },
                            }}
                        />
                    </IconButton>
                </Tooltip>
                <HelpButton/>
            </Box>
        </Box>
    );
};

export default Header;
