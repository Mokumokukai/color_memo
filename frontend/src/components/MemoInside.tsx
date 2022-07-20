
const style: React.CSSProperties = {
    border: "solid",
    backgroundColor: "#FFFF00",
    borderColor: "#FFFF00",
    borderRadius: "20px",
    height: "50%",
    width: "50%",
    position: "absolute",
    transform: "translate(-50%,-50%)",
    left: "50%",
    top: "50%"
};
const MemoInside = () => {
    return(
        <div style={style}>
        </div>
    )
}

export default MemoInside;