import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MapThemes from "../../config/MapThemes";
import { setMapThemeLayers } from "../../js/Layers";

const MapThemeSelect = () => {
  const [theme, setTheme] = useState("");

  const handleChange = (event) => {
    setMapThemeLayers(event.target.value);
    setTheme(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 180 }}>
      <FormControl fullWidth>
        <InputLabel id="mapThemeSelectLabel">Select Map</InputLabel>
        <Select
          labelId="mapThemeSelectLabel"
          id="demo-simple-select"
          value={theme}
          label="Map Theme"
          onChange={handleChange}
        >
          {MapThemes.map(({ themeTitle }, index) => (
            <MenuItem key={index} value={themeTitle}>
              {themeTitle}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default MapThemeSelect;
