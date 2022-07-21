import Box from '@mui/material/Box';
const style: React.CSSProperties = {
  backgroundColor: "#FFFFFF",
  borderRadius: "5px",
  height: "50px",
  width: "50px",
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