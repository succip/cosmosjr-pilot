import Box from "@mui/material/Box";
import ColorSelect from "./ColorSelect";
import FillStyleSelect from "./FillStyleSelect";
import OpacitySlider from "./OpacitySlider";

const PolygonToolbox = ({ symbol }) => {
  return (
    <Box>
      <ColorSelect label={"Fill Color"} symbol={symbol} />
      <FillStyleSelect label={"Fill Style"} symbol={symbol} />
      <OpacitySlider label={"Fill Opacity"} symbol={symbol} />
      <ColorSelect label={"Outline Color"} symbol={symbol.outline} />
    </Box>
  );
};

export default PolygonToolbox;
