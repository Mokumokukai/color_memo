import Box from '@mui/material/Box';

import ColorMemoInside from './ColorMemoInside';

type Props = {
  color: string;
  insideColor: string;
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void;
};

function ColorMemoCard({ color, insideColor, onClick }: Props) {
  const style: React.CSSProperties = {
    border: 'solid',
    borderColor: color,
    borderRadius: '20px',
    height: '100%',
    aspectRatio: '1/1',
    position: 'relative',
    backgroundColor: color,
  };

  return (
    <div className="color-memo-card">
      <Box sx={style} onClick={onClick} className="outside">
        <ColorMemoInside color={insideColor} type="text" />
      </Box>
    </div>
  );
}

export default ColorMemoCard;
