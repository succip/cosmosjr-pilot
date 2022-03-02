import React from "react";
import MapLayerList from "./LayerList/MapLayerList";
import MapLegend from "./MapLegend";

const Controlbar = () => {
  return (
    <>
      <MapLayerList />
      <MapLegend />
    </>
  );
};

export default Controlbar;
