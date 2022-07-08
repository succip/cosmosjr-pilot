import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getSketchVM } from "../../../js/Draw";

const PolygonEditor = ({ polySymbol }) => {
  const [symbol, setSymbol] = useState(polySymbol);

  useEffect(() => {
    console.log("Symbol changed:", symbol);
  }, [symbol]);

  const onWidthClick = () => setSymbol({ ...symbol });

  return (
    <>
      <button onClick={onWidthClick}>+1 width</button>
    </>
  );
};

const DrawTest = () => {
  const { sketchVM } = useSelector((state) => state.app);

  return (
    <>
      {sketchVM !== null && (
        <>
          <PolygonEditor polySymbol={sketchVM.polygonSymbol} />
        </>
      )}
    </>
  );
};

export default DrawTest;
