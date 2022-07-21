import { ColorMemoDataType } from "../types";
import Box from '@mui/material/Box';

import ColorMemoInside from "./ColorMemoInside";
const style: React.CSSProperties = {
    border: "solid",
    backgroundColor: "#FF00FF",
    borderColor: "#FF00FF",
    borderRadius: "20px",
    height: "100%",
    aspectRatio: "1/1",
    color: "#61dafb",
    position: "relative"
};

const ColorMemoCard = () => {
    return (
        <div className="color-memo-card">
            <Box sx={style}>
                <ColorMemoInside />
            </Box>
        </div>
    )
}

export default ColorMemoCard;