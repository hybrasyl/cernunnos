import React from "react";
import { Box, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import HelpIcon from '@mui/icons-material/Help';


const Header = () => {
    return (
        <Box display="flex" flexDirection="row" justifyContent="space-between" sx={{ bgcolor: "primary.dark", pb: 1 }}>
            <Typography component="div" variant="h2" sx={{ml:1}}>
                Hybrasyl Roadmap
            </Typography>
            <Box display="flex" justifyContent="flex-end" alignItems="center">
                <HomeIcon sx={{ fontSize: 60, mx: 3, border:1, bgcolor:"tertiary.dark", boxShadow: 10, "&:hover": { boxShadow: 0, bgcolor:"secondary.dark"} }} />
                <HelpIcon sx={{ fontSize: 60, mx: 3, border:1, bgcolor:"tertiary.dark", boxShadow: 10, "&:hover": { boxShadow: 0, bgcolor:"secondary.dark"}  }} />
            </Box>
        </Box>
    );
};

export default Header;
