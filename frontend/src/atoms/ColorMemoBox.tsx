import Box from '@mui/material/Box'
type Props = {
    className?: string,
    color: string,
    typoCss: any,
};
const boxCss = {
    borderRadius: "10px"
}


const ColorMemoBox = ({ color, typoCss }: Props) => {

    console.log(color)
    const style: React.CSSProperties = { ...typoCss, ...boxCss, "backgroundColor": color } as React.CSSProperties;
    return (
        <Box sx={style}></Box>
    )
}

export default ColorMemoBox;