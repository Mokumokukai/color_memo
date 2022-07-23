import { ColorMemoDataType } from "../types";
import Box from '@mui/material/Box';
import * as React from 'react'


import ColorMemoInside from "./ColorMemoInside";
type Props = {
    className?: string,
    color: string,
    insideColor: string
    selected: boolean,
    onClick: (event: React.MouseEvent<HTMLInputElement>) => void

};


const ColorMemoCard = (props: Props) => {

    const style: React.CSSProperties = {
        border: "solid",
        borderColor: props.color,
        borderRadius: "20px",
        height: "100%",
        aspectRatio: "1/1",
        position: "relative",
        backgroundColor: props.color
    };
    return (
        <div className="color-memo-card">
            <Box sx={style} onClick={props.onClick} className="outside">
                <ColorMemoInside insideColor={props.insideColor} />
            </Box>
        </div>
    )
}

ColorMemoCard.defaultProps = {
    className: '',
    color: '#FF00FF',
    selected: false,
    insideColor: "#FF00FF",
    onClick: () => null

}


export default ColorMemoCard;