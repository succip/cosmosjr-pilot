import React from "react";
import { useSelector } from "react-redux";
import LayerListItem from "./LayerListItem";

const MapLayerList = () => {
  const { mapLayers } = useSelector((state) => state.layers);
  return (
    <div>
      <p className="h4">Layer List</p>
      {mapLayers.map((mapLayer) => {
        return <LayerListItem key={mapLayer.ulid} mapLayer={mapLayer} />;
      })}
    </div>
  );
};

export default MapLayerList;
