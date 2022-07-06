import Box from "@mui/material/Box";
import ColorSelect from "./ColorSelect";
import StyleSelect from "./StyleSelect";
import { pointStyleList } from "../../config/DrawConfig";
import SizeField from "./SizeField";

const PointToolbox = ({ symbol }) => {
  return (
    <Box>
      <StyleSelect label={"Point Style"} symbol={symbol} styleList={pointStyleList} />
      <ColorSelect label={"Point Color"} symbol={symbol} />
      <SizeField label={"Point Size"} symbol={symbol} />
    </Box>
  );
};

export default PointToolbox;
