import React from "react";
import LayerLegendPanel from "../components/LayerLegendPanel";
import MapLayerList from "./LayerList/MapLayerList";
import MapLegend from "./MapLegend";

const Controlbar = () => {
  return (
    <>
      <LayerLegendPanel />
      <MapLayerList />
      <MapLegend />
    </>
  );
};

export default Controlbar;
