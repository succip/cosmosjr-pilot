import Box from "@mui/material/Box";
import ColorSelect from "./ColorSelect";

const PolygonToolbox = ({ symbol }) => {
  return (
    <Box>
      <ColorSelect symbol={symbol} />
    </Box>
  );
};

export default PolygonToolbox;
