type Props = {
  color: string;
  typoCss: object;
  insideText?: string;
};
const textCss = {
  fontSize: '10vw',
  textAlign: 'center',
  lineHeight: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
};

function ColorMemoText({ color, typoCss, insideText }: Props) {
  const style: React.CSSProperties = {
    ...typoCss,
    color,
    ...textCss,
  } as React.CSSProperties;

  return (
    <div style={style}>
      <p>{insideText}</p>
    </div>
  );
}

ColorMemoText.defaultProps = {
  insideText: 'test',
};

export default ColorMemoText;
