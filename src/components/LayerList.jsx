import { useSelector } from "react-redux";

const LayerList = () => {
  const layerStore = useSelector((state) => state.layers);
  return (
    <div className="layerList">
      <h3>Map Layers</h3>
      {layerStore.layers.map((layer) => {
        return <p key={layer}>{layer}</p>;
      })}
    </div>
  );
};

export default LayerList;
