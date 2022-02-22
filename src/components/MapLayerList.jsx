import React from "react";
import { useSelector } from "react-redux";
import LayerListItem from "./LayerListItem";

const MapLayerList = () => {
  const { allLayers } = useSelector((state) => state.layers);
  return (
    <div>
      <p className="h4">Layer List</p>
      {allLayers.map((mapLayer) => {
        return <LayerListItem key={mapLayer.layer.title} mapLayer={mapLayer} />;
      })}
    </div>
  );
};

export default MapLayerList;
