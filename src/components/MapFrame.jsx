import React, { useRef, useEffect, useContext } from "react";
import { initialize } from "../js/webmap";
import { AppContext } from "../store/AppContext";
import { statesService } from "../services/mapServices";

const MapFrame = () => {
  const mapRef = useRef(null);
  const { addLayer } = useContext(AppContext);

  useEffect(() => {
    if (mapRef.current) {
      const mapView = initialize(mapRef.current);

      mapView.on("click", () => {
        mapView.map.add(statesService);
      });

      mapView.map.layers.on("change", ({ added }) => {
        addLayer({
          name: added[0].title,
          id: added[0].id,
          url: added[0].url,
          visible: true,
        });
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
