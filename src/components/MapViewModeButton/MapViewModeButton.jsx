import Button from "@mui/material/Button";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { activateBasemapMode, activateOrthoMode } from "../../js/Layers";

const MapViewModeButton = () => {
  const { mapViewMode } = useSelector((state) => state.app);
  const [altViewMode, setAltViewMode] = useState(mapViewMode === "basemap" ? "ortho" : "basemap");

  const onMapViewModeClick = () => {
    mapViewMode === "basemap" ? activateOrthoMode() : activateBasemapMode();
  };

  useEffect(() => {
    setAltViewMode(mapViewMode === "basemap" ? "ortho" : "basemap");
  }, [mapViewMode]);

  return (
    <div className="mapViewModeButton">
      <Button variant="contained" onClick={onMapViewModeClick}>
        {altViewMode}
      </Button>
    </div>
  );
};

export default MapViewModeButton;
