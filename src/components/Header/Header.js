import React from "react";
import {Box, Typography, Divider} from "@mui/material";

const Header = () => {
    return(
        <Box>
            <Typography component="div" variant="h2" sx={{mb:2}}>
                Hybrasyl Roadmap
            </Typography>
            <Divider/>
        </Box>
    )

}

export default Header