import Grid from "@mui/material/Grid";
import ColorMemoCard from "../components/ColorMemoCard";

const TopPage = () => {
    const handleClick = (event: any) => {

    }
    return (
        <div className="top-page-container">
            <Grid container rowSpacing={8} columnSpacing={10} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(Array(6)).map((_, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <ColorMemoCard onClick={handleClick} color={"#FF00FFFF"} children={"#FF00FFFF"} />
                    </Grid>
                ))}
            </Grid>


        </div>
    )

};


export default TopPage;