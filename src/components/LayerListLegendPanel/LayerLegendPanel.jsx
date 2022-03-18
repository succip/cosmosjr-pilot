import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import MapLayerList from "./MapLayerList";
import MapLegend from "./MapLegend";

function TabPanel(props) {
  const { children, value, index } = props;

  return <div>{<Box hidden={value !== index}>{children}</Box>}</div>;
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} variant="fullWidth">
          <Tab label="Layer List" />
          <Tab label="Legend" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <MapLayerList />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MapLegend />
      </TabPanel>
    </>
  );
}
