import React from "react";
import { Box, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import HelpIcon from "@mui/icons-material/Help";

const Header = () => {
    return (
        <Box display="flex" flexDirection="row" justifyContent="space-between" sx={{ bgcolor: "primary.dark", pb: 1 }}>
            <Typography component="div" sx={{ ml: 1, typography: { xs: "h6", sm: "h4", md: "h4", lg: "h3"} }}>
                Hybrasyl Roadmap
            </Typography>
            <Box display="flex" justifyContent="flex-end" alignItems="center">
                <HomeIcon
                    sx={{
                        fontSize: { xs: 20, sm: 30, md: 40 },
                        mx: { xs: 1, sm: 3 },
                        border: 1,
                        bgcolor: "tertiary.dark",
                        boxShadow: 10,
                        "&:hover": { boxShadow: 0, bgcolor: "secondary.dark" },
                    }}
                />
                <HelpIcon
                    sx={{
                        fontSize: { xs: 20, sm: 30, md: 40 },
                        mx: { xs: 1, sm: 3 },
                        border: 1,
                        bgcolor: "tertiary.dark",
                        boxShadow: 10,
                        "&:hover": { boxShadow: 0, bgcolor: "secondary.dark" },
                    }}
                />
            </Box>
        </Box>
    );
};

export default Header;
