import { FC } from 'react'
import { text } from 'stream/consumers';
type Props = {
    className?: string,
    color: string,
    typoCss: any,
    insideText: string

};
const textCss = {
    fontSize: "10vw",
    textAlign: "center",
    lineHeight: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
}

const ColorMemoText = ({ color, typoCss, insideText }: Props) => {

    const style: React.CSSProperties = { ...typoCss, "color": color, ...textCss } as React.CSSProperties;

    return (
        <div style={style} >
            <p>{insideText}</p>
        </div>
    )

}

export default ColorMemoText;