import React, { useRef, useEffect } from "react";
import { initialize } from "../js/Webmap";
import { useDispatch } from "react-redux";
import { setView } from "../store/actions/appActions";
import MapViewModeButton from "./MapViewModeButton/MapViewModeButton";

const MapFrame = () => {
  const mapRef = useRef(null);
  const mapDispatch = useDispatch();

  useEffect(() => {
    if (mapRef.current) {
      const view = initialize(mapRef.current);
      mapDispatch(setView(view));
    }
  }, []);

  return (
    <div>
      <div className="mapViewModeButton">
        <MapViewModeButton />
      </div>
      <div ref={mapRef} className="viewDiv" />
    </div>
  );
};

export default MapFrame;
