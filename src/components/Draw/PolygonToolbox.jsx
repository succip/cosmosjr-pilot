import Box from "@mui/material/Box";
import ColorSelect from "./ColorSelect";
import StyleSelect from "./StyleSelect";
import OpacitySlider from "./OpacitySlider";
import WidthField from "./WidthField";
import SymbolPreview from "./SymbolPreview";
import { fillStyleList } from "../../config/DrawConfig";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const PolygonToolbox = ({ symbol }) => {
  const { sketchVM } = useSelector((state) => state.app);
  const [polySymbol, setPolySymbol] = useState(symbol);
  const [lineSymbol, setLineSymbol] = useState(symbol.outline);

  // useEffect(() => {
  //   if (sketchVM) {
  //     sketchVM.polygonSymbol = polySymbol;
  //     sketchVM.polygonSymbol.outline = lineSymbol;
  //   }
  // }, [polySymbol, lineSymbol]);

  useEffect(() => {
    if (sketchVM) {
      console.log("sketch changed");
    }
    console.log("svm", sketchVM);
  }, [sketchVM.polygonSymbol]);

  const onBtnClick = () => {
    console.log("sketch:", sketchVM.polygonSymbol.style);
  };

  return (
    <Box>
      {/* <ColorSelect label={"Fill Color"} symbol={symbol} /> */}
      <StyleSelect label={"Fill Style"} symbol={sketchVM.polygonSymbol} styleList={fillStyleList} />
      <OpacitySlider label={"Fill Opacity"} symbol={symbol} />
      <ColorSelect label={"Outline Color"} setSymbol={setLineSymbol} symbol={lineSymbol} />
      <WidthField label={"Outline Width"} setSymbol={setLineSymbol} symbol={lineSymbol} />
      <SymbolPreview symbol={symbol} polySymbol={polySymbol} lineSymbol={lineSymbol} />
      <button onClick={onBtnClick}>test</button>
    </Box>
  );
};

export default PolygonToolbox;
