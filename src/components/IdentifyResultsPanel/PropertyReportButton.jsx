import Button from "@mui/material/Button";
import { exportMap } from "../../js/Print";
import { dpi } from "../../config/PrintConfig";
const url =
  "https://cosmos.surrey.ca/external/apps/tools/propertyreport/PropertyReportExternal.aspx?";

const PropertyReportButton = ({ mslink, propertyNumber }) => {
  const onPropertyReportClick = async () => {
    const propertyReportPrintTemplate = {
      layout: "map-only",
      format: "PNG32",
      layoutOptions: {
        titleText: "",
        authorText: "",
      },
      exportOptions: {
        dpi,
      },
    };
    const printedMap = await exportMap(propertyReportPrintTemplate);
    console.log(printedMap.url);
    let reportUrl = `${url}MSLINK=${mslink}&PROPERTY_NUMBER=${propertyNumber}&IMAGEURL=${printedMap.url}`;
  };
  return (
    <>
      <Button onClick={onPropertyReportClick}>Property Report</Button>
    </>
  );
};

export default PropertyReportButton;
