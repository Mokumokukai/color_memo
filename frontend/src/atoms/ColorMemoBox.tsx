import Box from '@mui/material/Box'

type Props = {
  color: string
  typoCss: object
}
const boxCss = {
  borderRadius: '10px',
}

function ColorMemoBox({ color, typoCss }: Props) {
  const style: React.CSSProperties = {
    ...typoCss,
    ...boxCss,
    backgroundColor: color,
  } as React.CSSProperties

  return <Box sx={style} />
}

export default ColorMemoBox
