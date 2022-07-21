import Box from '@mui/material/Box';
const style: React.CSSProperties = {
  backgroundColor: "#FFFFFF",
  borderRadius: "5px",
  height: "50%",
  aspectRatio: "1/1",
  position: "absolute",
  transform: "translate(-50%, -50%)",
  left: "50%",
  top: "50%"
};
export default function ColorMemoInside() {
  return (
    <Box sx={style} />
  );
}