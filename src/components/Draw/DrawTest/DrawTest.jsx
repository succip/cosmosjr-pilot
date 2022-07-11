import { useEffect } from "react";
import { useState, useRef } from "react";
import { useSelector } from "react-redux";

const PolygonEditor = ({ polySymbol }) => {
  const [symbol, setSymbol] = useState(polySymbol);

  useEffect(() => {
    console.log("Symbol changed:", symbol);
  }, [symbol]);

  const onWidthClick = () => {
    const newSym = symbol.clone();
    newSym.outline = { ...symbol.outline, width: 14 };
    setSymbol(newSym);
  };

  const onStyleClick = () => {
    const newSym = symbol.clone();
    newSym.style = "vertical";
    setSymbol(newSym);
  };

  return (
    <>
      <button onClick={onWidthClick}>width</button>
      <button onClick={onStyleClick}>style</button>
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
