import React, { useRef, useEffect } from "react";
import { initialize } from "../js/Webmap";
import { useDispatch } from "react-redux";
import { setView } from "../store/actions/appActions";

const MapFrame = () => {
  const mapRef = useRef(null);
  const mapDispatch = useDispatch();

  useEffect(() => {
    async function dispatchView() {
      const view = await initialize(mapRef.current);
      mapDispatch(setView(view));
    }
    if (mapRef.current) {
      dispatchView();
    }
  }, []);

  return (
    <div>
      <div ref={mapRef} className="viewDiv" />
    </div>
  );
};

export default MapFrame;
