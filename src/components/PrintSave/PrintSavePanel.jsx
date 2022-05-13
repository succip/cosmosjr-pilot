import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TestPanelContent from "../TestPanelContent";
import PrintTab from "./PrintTab";

const TabPanel = (props) => {
  const { children, value, index } = props;

  return <div>{<Box hidden={value !== index}>{children}</Box>}</div>;
};

const PrintSavePanel = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event = undefined, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} variant="fullWidth">
          <Tab label="Print" />
          <Tab label="Bookmark" />
          <Tab label="Save/Load" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <PrintTab />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <TestPanelContent />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TestPanelContent />
      </TabPanel>
    </>
  );
};

export default PrintSavePanel;
