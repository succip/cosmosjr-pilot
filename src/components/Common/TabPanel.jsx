import Box from "@mui/material/Box";

const TabPanel = ({ children, value, index }) => {
  return <>{<Box hidden={value !== index}>{children}</Box>}</>;
};

export default TabPanel;
