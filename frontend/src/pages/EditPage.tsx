import ColorMemoCard from "../components/ColorMemoCard";
import { Box } from "@mui/material";
import { RgbaStringColorPicker } from "react-colorful";
import { useState } from "react";


const EditPage = () => {
    const [outsideColor, setOutsideColor] = useState("#FFFF00FF");
    const [insideColor, setInsideColor] = useState("#FFFF00FF");

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
        ColorPicker = <RgbaStringColorPicker color={outsideColor} onChange={setOutsideColor} />;

    } else {
        ColorPicker = <RgbaStringColorPicker color={insideColor} onChange={setInsideColor} />;

    }
    return (

        <div className="edit-page-container">
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                <Box gridColumn="span 6">
                    <ColorMemoCard color={outsideColor} onClick={handleClick} children={insideColor} ></ColorMemoCard>
                </Box>
                <Box gridColumn="span 3">
                    {ColorPicker}
                </Box>

            </Box>
        </div>
    )

};


export default EditPage;