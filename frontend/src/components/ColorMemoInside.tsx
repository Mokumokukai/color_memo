import ColorMemoText from '../atoms/ColorMemoText'
import ColorMemoBox from '../atoms/ColorMemoBox'

type Props = {
  color: string
  insideText?: string
  type: string
}
const baseChildCss = {
  height: '50%',
  aspectRatio: '1/1',
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  left: '50%',
  top: '50%',
}

function ColorMemoInside({ color, insideText, type }: Props) {
  const insideComponent = () => {
    switch (type) {
      case 'box':
        return <ColorMemoBox color={color} typoCss={baseChildCss} />
      case 'text':
        return (
          <ColorMemoText
            color={color}
            insideText={insideText}
            typoCss={baseChildCss}
          />
        )
      default:
        return (
          <ColorMemoText
            color={color}
            insideText={insideText}
            typoCss={baseChildCss}
          />
        )
    }
  }

  return <div>{insideComponent()}</div>
}

ColorMemoInside.defaultProps = {
  insideText: 'test',
}

export default ColorMemoInside
