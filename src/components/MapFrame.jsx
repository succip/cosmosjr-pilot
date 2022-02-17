import React, { useRef, useEffect, useContext } from "react";
import { initialize } from "../js/webmap";
import { statesService } from "../services/mapServices";
import { useDispatch } from "react-redux";
import { addLayer } from "../store/actions/layerActions";

const MapFrame = () => {
  const mapRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (mapRef.current) {
      const mapView = initialize(mapRef.current);
      mapView.map.add(statesService);

      mapView.on("click", () => {
        dispatch(addLayer("layer clicked"));
      });
    }
  }, []);

  return (
    <div className="mapFrame">
      <div ref={mapRef} className="viewDiv" />
    </div>
  );
};

export default MapFrame;
