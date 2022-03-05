import React from "react";
import LayerStore from "../../config/LayerStore";
import LayerListTree from "./LayerListTree";

const MapLayerList = () => {
  return (
    <div>
      <LayerListTree treeItems={LayerStore} />
    </div>
  );
};

export default MapLayerList;
