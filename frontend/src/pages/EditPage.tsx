import ColorMemoCard from "../components/ColorMemoCard";
import { Box, Grid } from "@mui/material";
import { HexColorPicker } from "react-colorful";
import { useState } from "react";
import { render } from "@testing-library/react";


const EditPage = () => {
    const [outsideColor, setOutsideColor] = useState("#aabbcc");
    const [insideColor, setInsideColor] = useState("#FF00FF");

    const [selected, setSelected] = useState(true)

    const handleClick = (event: any) => {
        const classname = event.target.className;
        if (classname.indexOf("outside") > -1) {
            setSelected(true)
        } else {
            setSelected(false);
        }
    }
    let ColorPicker;
    if (selected) {
        ColorPicker = <HexColorPicker color={outsideColor} onChange={setOutsideColor} />;

    } else {
        ColorPicker = <HexColorPicker color={insideColor} onChange={setInsideColor} />;

    }
    return (

        <div className="edit-page-container">
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                <Box gridColumn="span 6">
                    <ColorMemoCard color={outsideColor} insideColor={insideColor} onClick={handleClick} ></ColorMemoCard>
                </Box>
                <Box gridColumn="span 3">
                    {ColorPicker}
                </Box>

            </Box>
        </div>
    )

};


export default EditPage;