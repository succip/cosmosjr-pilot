import React, { useRef, useEffect } from "react";
import { initialize } from "../js/webmap";
import { useDispatch } from "react-redux";
import { addMapView } from "../store/actions/mapActions";

const MapFrame = () => {
  const mapRef = useRef(null);
  const mapDispatch = useDispatch();

  useEffect(() => {
    if (mapRef.current) {
      const view = initialize(mapRef.current);
      mapDispatch(addMapView(view));
    }
  }, []);

  return (
    <div className="mapFrame">
      <div ref={mapRef} className="viewDiv" />
    </div>
  );
};

export default MapFrame;
