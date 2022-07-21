import ColorMemoCard from "../components/ColorMemoCard";
import { Box, Grid } from "@mui/material";
import React from 'react';
import { HexColorPicker } from "react-colorful";

const EditPage = () => {
    return (
        <div className="edit-page-container">
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                <Box gridColumn="span 6">
                    <ColorMemoCard></ColorMemoCard>
                </Box>
                <Box gridColumn="span 3">
                    <HexColorPicker />
                </Box>

            </Box>
        </div>
    )

};


export default EditPage;