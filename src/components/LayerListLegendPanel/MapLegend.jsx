import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Legend from "@arcgis/core/widgets/Legend";

const MapLegend = () => {
  const { view } = useSelector((state) => state.app);
  const legendRef = useRef(null);

  useEffect(() => {
    if (view) {
      const legend = new Legend({
        view,
      });
      legend.container = legendRef.current;
    }
  }, [view]);

  return (
    <div>
      <div ref={legendRef}></div>
    </div>
  );
};

export default MapLegend;
