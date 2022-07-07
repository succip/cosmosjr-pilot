import Box from "@mui/material/Box";
import ColorSelect from "./ColorSelect";
import StyleSelect from "./StyleSelect";
import OpacitySlider from "./OpacitySlider";
import WidthField from "./WidthField";
import { fillStyleList } from "../../config/DrawConfig";
import SymbolPreview from "./SymbolPreview";
import { useEffect } from "react";

const PolygonToolbox = ({ symbol }) => {
  return (
    <Box>
      <ColorSelect label={"Fill Color"} symbol={symbol} />
      <StyleSelect label={"Fill Style"} symbol={symbol} styleList={fillStyleList} />
      <OpacitySlider label={"Fill Opacity"} symbol={symbol} />
      <WidthField label={"Outline Width"} symbol={symbol.outline} />
      <ColorSelect label={"Outline Color"} symbol={symbol.outline} />
      <SymbolPreview symbol={symbol} />
    </Box>
  );
};

export default PolygonToolbox;
