import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from "@mui/material/styles";
function Header() {

    return (
        <AppBar position="sticky">
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}/>
                <Typography variant="h6" color="inherit" component="div">
                    Photos
                </Typography>
            </Toolbar>
        </AppBar>
    )

}

export default Header;