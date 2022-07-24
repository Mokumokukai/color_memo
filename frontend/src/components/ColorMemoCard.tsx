import { ColorPair } from "../types";
import Box from '@mui/material/Box';
import { FC, ReactNode } from 'react'


import ColorMemoInside from "./ColorMemoInside";
type Props = {
    className?: string,
    color: string,
    onClick: (event: React.MouseEvent<HTMLInputElement>) => void
    children: ReactNode

};


const ColorMemoCard: FC<Props> = ({ color, onClick, children }) => {

    const style: React.CSSProperties = {
        border: "solid",
        borderColor: color,
        borderRadius: "20px",
        height: "100%",
        aspectRatio: "1/1",
        position: "relative",
        backgroundColor: color
    };
    return (
        <div className="color-memo-card">
            <Box sx={style} onClick={onClick} className="outside">
                <ColorMemoInside color={children as string} />
            </Box>
        </div>
    )
}

ColorMemoCard.defaultProps = {
    className: '',
    color: "#FFFF00FF",
    onClick: () => null,
    children: "#FFFF00FF",


}


export default ColorMemoCard;