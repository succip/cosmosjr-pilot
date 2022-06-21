import Button from "@mui/material/Button";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { activateBasemapMode, activateDefaultOrthoLayer } from "../../js/Layers";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";

const MapViewModeToggle = () => {
  const { mapViewMode } = useSelector((state) => state.app);
  const [altViewMode, setAltViewMode] = useState(mapViewMode === "basemap" ? "ortho" : "basemap");

  const onMapViewModeClick = () => {
    mapViewMode === "basemap" ? activateDefaultOrthoLayer() : activateBasemapMode();
  };

  useEffect(() => {
    setAltViewMode(mapViewMode === "basemap" ? "Aerial" : "Basemap");
  }, [mapViewMode]);

  return (
    <div>
      <Button variant="contained" onClick={onMapViewModeClick}>
        {altViewMode} {mapViewMode === "basemap" ? <PublicOutlinedIcon /> : <MapOutlinedIcon />}
      </Button>
    </div>
  );
};

export default MapViewModeToggle;
