import { ColorMemoDataType } from "../types";
import MemoInside from "./MemoInside";
const style: React.CSSProperties = {
    border: "solid",
    backgroundColor: "#FF00FF",
    borderColor: "#FF00FF",
    borderRadius: "20px",
    height: "100px",
    width: "100px",
    color: "#61dafb",
    position: "relative"
};

const ColorMemoCard = () => {
    return(
        <div className="color-memo-card">
            <div style={style}>
                <MemoInside></MemoInside>
            </div>
        </div>
    )
}

export default ColorMemoCard;