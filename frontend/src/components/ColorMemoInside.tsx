import { FC, ReactNode } from 'react'
import ColorMemoText from '../atoms/ColorMemoText';
import ColorMemoBox from '../atoms/ColorMemoBox';
type Props = {
  className?: string,
  color: string,
  insideText?: string,
  type: string

};
const baseChildCss = {
  height: "50%",
  aspectRatio: "1/1",
  position: "absolute",
  transform: "translate(-50%, -50%)",
  left: "50%",
  top: "50%"
}


const ColorMemoInside = ({ color, insideText, type }: Props) => {
  let insideComponent
  if (type === "box") {
    insideComponent = <ColorMemoBox color={color} typoCss={baseChildCss}></ColorMemoBox>;

  } else if (type === "text") {
    insideComponent = <ColorMemoText color={color} insideText={insideText as string} typoCss={baseChildCss}></ColorMemoText>;

  } else {
    insideComponent = <ColorMemoText color={color} insideText={insideText as string} typoCss={baseChildCss}></ColorMemoText>;

  }

  return (
    <div>
      {insideComponent}
    </div>
  );
}

ColorMemoInside.defaultProps = {
  className: '',
  insideText: 'TEST',
  color: "#FFFF00FF",
  type: "text"

}
export default ColorMemoInside;