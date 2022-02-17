import { useState } from "react";
import LayerList from "./components/LayerList";
import MapFrame from "./components/MapFrame";
import "./app.css";

function App() {
  const [layerList, setLayerList] = useState([]);

  return (
    <div className="row g-0">
      <div className="col-2">
        <LayerList layerList={layerList} />
      </div>
      <div className="col-10">
        <MapFrame layerList={layerList} setLayerList={setLayerList} />
      </div>
    </div>
  );
}

export default App;
