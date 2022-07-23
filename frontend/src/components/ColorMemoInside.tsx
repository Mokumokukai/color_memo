import Box from '@mui/material/Box';
type Props = {
  className?: string,
  insideColor: string

};

const ColorMemoInside = (props: Props) => {

  const style: React.CSSProperties = {
    backgroundColor: props.insideColor,
    borderRadius: "5px",
    height: "50%",
    aspectRatio: "1/1",
    position: "absolute",
    transform: "translate(-50%, -50%)",
    left: "50%",
    top: "50%"
  };

  return (
    <Box sx={style} />
  );
}

ColorMemoInside.defaultProps = {
  className: '',
  insideColor: "#FF00FF",

}
export default ColorMemoInside;