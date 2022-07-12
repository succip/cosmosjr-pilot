import Box from "@mui/material/Box";
import ColorSelect from "./ColorSelect";
import StyleSelect from "./StyleSelect";
import OpacitySlider from "./OpacitySlider";
import WidthField from "./WidthField";
import SymbolPreview from "./SymbolPreview";
import { fillStyleList } from "../../config/DrawConfig";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const PolygonToolbox = ({ symbol }) => {
  const { sketchVM } = useSelector((state) => state.app);
  const [polySymbol, setPolySymbol] = useState(symbol);
  const [lineSymbol, setLineSymbol] = useState(symbol.outline);
  const previewRef = useRef(null);

  useEffect(() => {
    if (sketchVM) {
      sketchVM.polygonSymbol = polySymbol;
      sketchVM.polygonSymbol.outline = lineSymbol;
    }
  }, [JSON.stringify(symbol)]);

  const onBtnClick = () => {
    console.log("Current style:", symbol.style);
  };

  return (
    <Box>
      {/* <ColorSelect label={"Fill Color"} symbol={symbol} /> */}
      <StyleSelect label={"Fill Style"} symbol={sketchVM.polygonSymbol} styleList={fillStyleList} />
      <OpacitySlider label={"Fill Opacity"} symbol={symbol} />
      <ColorSelect label={"Outline Color"} setSymbol={setLineSymbol} symbol={lineSymbol} />
      <WidthField label={"Outline Width"} setSymbol={setPolySymbol} symbol={lineSymbol} />
      <SymbolPreview symbol={symbol} />
      <button onClick={onBtnClick}>test</button>
      <div ref={previewRef}></div>
    </Box>
  );
};

export default PolygonToolbox;
