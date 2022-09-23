import './ColorMemoText.css';

type Props = {
  color: string;
  typoCss: object;
  insideText?: string;
};

function ColorMemoText({ color, typoCss, insideText }: Props) {
  const style: React.CSSProperties = {
    ...typoCss,
    color,
  } as React.CSSProperties;

  return (
    <div style={style} className="text">
      <p>{insideText}</p>
    </div>
  );
}

ColorMemoText.defaultProps = {
  insideText: 'test',
};

export default ColorMemoText;
