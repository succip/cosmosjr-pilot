import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MapThemeSelect from "./MapThemeSelect";
import SearchBar from "../SearchBar/SearchBar";
import Grid from "@mui/material/Grid";

const appBarStyle = {
  color: "#666666",
  background: "#FFFFFF",
};

const AppTitleBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar elevation={0} style={appBarStyle} position="static">
        <Toolbar>
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            COSMOS Jr.
          </Typography>
          <Grid container direction="column" alignItems="center" justify="center">
            <SearchBar />
          </Grid>
          <MapThemeSelect />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppTitleBar;
