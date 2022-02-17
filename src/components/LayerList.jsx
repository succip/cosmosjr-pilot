import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Legend from "@arcgis/core/widgets/Legend";

const LayerList = () => {
  const { legendLayers } = useSelector((state) => state.layers);
  const { mapView } = useSelector((state) => state.mapView);
  const legendRef = useRef(null);

  useEffect(() => {
    if (mapView) {
      const legend = new Legend({
        view: mapView,
        layerInfos: legendLayers,
      });
      legend.container = legendRef.current;
    }
  }, [mapView]);

  return (
    <div>
      <div ref={legendRef}></div>
    </div>
  );
};

export default LayerList;
