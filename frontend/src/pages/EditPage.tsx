import { Box } from '@mui/material'
import { RgbaStringColorPicker } from 'react-colorful'
import { useState } from 'react'
import ColorMemoCard from '../components/ColorMemoCard'

function EditPage() {
  const [outsideColor, setOutsideColor] = useState('#FFFF00FF')
  const [insideColor, setInsideColor] = useState('#FFFF00FF')
  const [selected, setSelected] = useState(true)

  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    const classname = (event.target as Element).className
    setSelected(classname.indexOf('outside') > -1)
  }

  const ColorPicker = (
    <RgbaStringColorPicker
      color={selected ? outsideColor : insideColor}
      onChange={selected ? setOutsideColor : setInsideColor}
    />
  )

  return (
    <div className="edit-page-container">
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box gridColumn="span 6">
          <ColorMemoCard
            color={outsideColor}
            onClick={handleClick}
            insideColor={insideColor}
          />
        </Box>
        <Box gridColumn="span 3">{ColorPicker}</Box>
      </Box>
    </div>
  )
}

export default EditPage
