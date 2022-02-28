import React from "react";
import { useSelector } from "react-redux";
import LayerListItem from "./LayerListItem";
import LayerStore from "../config/LayerStore";

const MapLayerList = () => {
  const { mapLayers } = useSelector((state) => state.layers);
  return (
    <div>
      <p className="h4">Layer List</p>

      {LayerStore.map((group) => {
        return (
          <div key={group.name}>
            <h3 key={group.name}>{group.name}</h3>
            {group.children.map((child) => {
              if (child.leaf) {
                return <p key={child.name}>{child.name}</p>;
              }
            })}
          </div>
        );
      })}

      {mapLayers.map((mapLayer) => {
        return <LayerListItem key={mapLayer.ulid} mapLayer={mapLayer} />;
      })}
    </div>
  );
};

export default MapLayerList;
