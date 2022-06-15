import Button from "@mui/material/Button";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { activateBasemapMode, activateOrthoMode } from "../../js/Layers";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";

const MapViewModeButton = () => {
  const { mapViewMode } = useSelector((state) => state.app);
  const [altViewMode, setAltViewMode] = useState(mapViewMode === "basemap" ? "ortho" : "basemap");

  const onMapViewModeClick = () => {
    mapViewMode === "basemap" ? activateOrthoMode() : activateBasemapMode();
  };

  useEffect(() => {
    setAltViewMode(mapViewMode === "basemap" ? "Aerial" : "Basemap");
  }, [mapViewMode]);

  return (
    <div className="mapViewModeButton">
      <Button variant="contained" onClick={onMapViewModeClick}>
        {altViewMode} {mapViewMode === "basemap" ? <PublicOutlinedIcon /> : <MapOutlinedIcon />}
      </Button>
    </div>
  );
};

export default MapViewModeButton;
