import React from "react";
import { useSelector } from "react-redux";

const MapLayerList = () => {
  const { legendLayers } = useSelector((state) => state.layers);

  return (
    <div>
      <h3>Layer List</h3>
    </div>
  );
};

export default MapLayerList;
