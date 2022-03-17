import React from "react";
import LayerTree from "../../config/LayerTree";
import LayerListTree from "./LayerListTree";

const MapLayerList = () => {
  return (
    <div>
      <LayerListTree treeItems={LayerTree} />
    </div>
  );
};

export default MapLayerList;
