import React from "react";
import MapLayerList from "./MapLayerList";
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
