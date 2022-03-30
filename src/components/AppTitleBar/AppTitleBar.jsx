import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MapThemeSelect from "./MapThemeSelect";

const appBarStyle = {
  color: "#666666",
  background: "#FFFFFF",
};

const AppTitleBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar elevation={0} style={appBarStyle} position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            COSMOS Jr.
          </Typography>
          <MapThemeSelect />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppTitleBar;
