import React from "react";
import { useSelector } from "react-redux";
import LayerListItem from "./LayerListItem";

const MapLayerList = () => {
  const { allLayers } = useSelector((state) => state.layers);
  return (
    <div>
      <p className="h4">Layer List</p>
      {allLayers.map((layer) => {
        return <LayerListItem key={layer.title} name={layer.title} visible={layer.visible} />;
      })}
    </div>
  );
};

export default MapLayerList;
