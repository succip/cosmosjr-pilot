import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "../components/Common/TabPanel";
import PolygonTab from "../components/Draw/PolygonTab";
import PolylineTab from "../components/Draw/PolylineTab";
import PointTab from "../components/Draw/PointTab";
import { useSelector } from "react-redux";

const DrawPanel = () => {
  const [value, setValue] = useState(0);
  const { sketchVM } = useSelector((state) => state.app);

  const onShapeClick = (shape) => {
    console.log(`${shape} clicked`);
    sketchVM.create(shape);
  };
  const onTabChange = (event, newValue) => setValue(newValue);

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={onTabChange} variant="fullWidth">
          <Tab label="Line" />
          <Tab label="Polygon" />
          <Tab label="Point" />
        </Tabs>
      </Box>
      <TabPanel onClick={() => onShapeClick("polyline")} value={value} index={0}>
        <PolylineTab />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PolygonTab />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <PointTab />
      </TabPanel>
    </>
  );
};

export default DrawPanel;
