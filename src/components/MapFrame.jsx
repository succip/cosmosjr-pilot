import React, { useRef, useEffect } from "react";
import { initialize } from "../js/Webmap";
import { useDispatch } from "react-redux";
import { setView } from "../store/actions/appActions";

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
    <div className="mapFrame">
      <div ref={mapRef} className="viewDiv" />
    </div>
  );
};

export default MapFrame;
