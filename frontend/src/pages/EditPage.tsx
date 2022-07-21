import ColorMemoCard from "../components/ColorMemoCard";
import { Box, Grid } from "@mui/material";
import React from 'react';
import {
    AlphaPicker, BlockPicker, ChromePicker, CirclePicker,
    CompactPicker, GithubPicker, HuePicker, MaterialPicker,
    PhotoshopPicker, SketchPicker, SliderPicker, SwatchesPicker,
    TwitterPicker, CustomPicker, InjectedColorProps, ColorResult,
    Color
} from "react-color";
import { Alpha, Checkboard, EditableInput, Hue, Saturation } from "react-color/lib/components/common";

const EditPage = () => {
    return (
        <div className="edit-page-container">
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                <Box gridColumn="span 6">
                    <ColorMemoCard></ColorMemoCard>
                </Box>
                <Box gridColumn="span 3">
                    <SketchPicker />
                </Box>

            </Box>
        </div>
    )

};


export default EditPage;