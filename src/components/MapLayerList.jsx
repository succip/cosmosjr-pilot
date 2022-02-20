import React from "react";
import { useSelector } from "react-redux";

const MapLayerList = () => {
  const { allLayers } = useSelector((state) => state.layers);

  return (
    <div>
      <p className="h4">Layer List</p>
    </div>
  );
};

export default MapLayerList;
