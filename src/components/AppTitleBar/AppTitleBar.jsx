import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SearchBar from "../SearchBar/SearchBar";
import MapThemeSelect from "./MapThemeSelect";

const barStyle = {
  backgroundColor: "gray",
  color: "white",
};

const AppTitleBar = () => {
  return (
    <Grid
      container
      sx={barStyle}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item>
        <Typography variant="h5">COSMOS Jr.</Typography>
      </Grid>
      <Grid item>
        <SearchBar />
      </Grid>
      <Grid item>
        <MapThemeSelect />
      </Grid>
    </Grid>
  );
};

export default AppTitleBar;
