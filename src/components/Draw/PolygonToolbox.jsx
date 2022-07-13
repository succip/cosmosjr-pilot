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

  useEffect(() => {
    if (sketchVM) {
      sketchVM.polygonSymbol = polySymbol;
    }
  }, [polySymbol]);

  return (
    <Box>
      <ColorSelect label="Fill Color" symbol={polySymbol} setSymbol={setPolySymbol} />
      <StyleSelect
        label="Fill Style"
        symbol={polySymbol}
        setSymbol={setPolySymbol}
        styleList={fillStyleList}
      />
      <WidthField label="Outline Width" symbol={polySymbol} setSymbol={setPolySymbol} />
      <OpacitySlider label="Fill Opacity" symbol={polySymbol} setSymbol={setPolySymbol} />
      <ColorSelect label="Outline Color" symbol={polySymbol} setSymbol={setPolySymbol} outline />
      <SymbolPreview symbol={polySymbol} />
    </Box>
  );
};

export default PolygonToolbox;
