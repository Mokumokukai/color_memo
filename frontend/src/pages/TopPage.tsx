import Grid from "@mui/material/Grid";
import ColorMemoCard from "../components/ColorMemoCard";
import { ColorPair } from "../types";
import MOCK_COLORS from "../MOCKDATA";
import React,{Fragment, useState} from "react";

const TopPage = () => {
    const [colorPairs, setColorPairs] = useState<ColorPair[]>(MOCK_COLORS)

    const handleClick = (event: any) => {

    }
    return (
        <div className="top-page-container">
            <Grid container rowSpacing={8} columnSpacing={10} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(colorPairs).map((colorpair, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <ColorMemoCard onClick={handleClick} color={colorpair.colors[0]} children={colorpair.colors[1]} />
                    </Grid>
                ))}
            </Grid>


        </div>
    )

};


export default TopPage;