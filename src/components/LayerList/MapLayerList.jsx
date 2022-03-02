import React from "react";
import LayerStore from "../../config/LayerStore";
import LayerListTree from "./LayerListTree";

const MapLayerList = () => {
  return (
    <div>
      <p className="h4">Layer List</p>
      <LayerListTree treeItems={LayerStore} />
    </div>
  );
};

export default MapLayerList;
