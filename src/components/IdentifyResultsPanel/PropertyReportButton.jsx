import Button from "@mui/material/Button";
import { exportMap } from "../../js/Print";
import { dpi } from "../../config/PrintConfig";
const propertyReportUrl =
  "https://cosmos.surrey.ca/external/apps/tools/propertyreport/PropertyReportExternal.aspx?";

const PropertyReportButton = ({ mslink, propertyNumber }) => {
  const onPropertyReportClick = async () => {
    const width = window.innerWidth > 0 ? window.innerWidth : window.screen.width;
    const height = window.innerHeight > 0 ? window.innerHeight : window.screen.height;
    const propertyReportPrintTemplate = {
      layout: "map-only",
      width,
      height,
    };
    const printedMap = await exportMap(propertyReportPrintTemplate);
    let reportUrl = `${propertyReportUrl}MSLINK=${mslink}&PROPERTY_NUMBER=${propertyNumber}&IMAGEURL=${printedMap.url}`;
    console.log("reportUrl", reportUrl);
  };
  return (
    <>
      <Button onClick={onPropertyReportClick}>Property Report</Button>
    </>
  );
};

export default PropertyReportButton;
