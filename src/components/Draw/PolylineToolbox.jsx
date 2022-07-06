import Box from "@mui/material/Box";
import ColorSelect from "./ColorSelect";
import WidthField from "./WidthField";
import StyleSelect from "./StyleSelect";
import { lineStyleList } from "../../config/DrawConfig";

const PolygonToolbox = ({ symbol }) => {
  return (
    <Box>
      <ColorSelect label={"Line Color"} symbol={symbol} />
      <StyleSelect label={"Line Style"} symbol={symbol} styleList={lineStyleList} />
      <WidthField label={"Line Width"} symbol={symbol} />
    </Box>
  );
};

export default PolygonToolbox;
