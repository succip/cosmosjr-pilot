import { useContext } from "react";
import { AppContext } from "../store/AppContext";

const LayerList = () => {
  const { state } = useContext(AppContext);
  return (
    <div className="layerList">
      <h3>Map Layers</h3>
      {state.layerList.map((layer) => {
        return <p key={layer.id}>{layer.name}</p>;
      })}
    </div>
  );
};

export default LayerList;
