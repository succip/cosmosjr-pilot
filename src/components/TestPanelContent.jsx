import React from "react";
import OpenDialogTest from "./OpenDialogTest";
import Widget from "./Widget/Widget";
import MapLayerList from "./LayerListLegendPanel/MapLayerList";

const TestPanelContent = () => {
  return (
    <div>
      <Widget title={"Test Title"}>
        <MapLayerList />
      </Widget>
    </div>
  );
};

export default TestPanelContent;
