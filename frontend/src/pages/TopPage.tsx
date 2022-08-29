import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @types/hello-colorでtypeを定義したので、補完は効くがeslintでエラーが出る。
// eslint-disable-next-line
import hello from 'hello-color';
import ColorMemoCard from '../components/ColorMemoCard';
import { ColorPair, IRandomColorProvider } from '../types';
import RandomColorCreater from "../utils/randomColorCreater";
import RandomColorPresenter from "../utils/randomColorPresenter";

function TopPage() {
  const navigate = useNavigate();
  const randomColorPresenter = new RandomColorPresenter(new Array<IRandomColorProvider>(
    new RandomColorCreater()
  ))
  const [colorPairs] = useState<ColorPair[]>(randomColorPresenter.GetColors(10));
  const handleClick = () => {
    navigate('/edit');
  };
  

  return (
    <div className="top-page-container">
      <Grid
        container
        rowSpacing={8}
        columnSpacing={10}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {colorPairs.map(colorpair => (
          <Grid item xs={2} sm={4} md={4} key={colorpair.id}>
            <ColorMemoCard
              onClick={handleClick}
              color={colorpair.colors[0]}
              insideColor={hello(colorpair.colors[0]).color}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default TopPage;
