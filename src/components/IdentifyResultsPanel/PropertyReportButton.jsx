import { useState } from "react";
import Button from "@mui/material/Button";
import LoadingIcon from "../Common/LoadingIcon";
import { exportMap } from "../../js/Print";
import { propertyReportUrl } from "../../config/PrintConfig";
const windowFeatures =
  "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes,width=1200,height=1000,top=25,left=25";

const PropertyReportButton = ({ mslink, propertyNumber }) => {
  const [loading, setLoading] = useState(false);

  const onPropertyReportClick = async () => {
    setLoading(true);
    const width = window.innerWidth > 0 ? window.innerWidth : window.screen.width;
    const height = window.innerHeight > 0 ? window.innerHeight : window.screen.height;
    const propertyReportPrintTemplate = {
      layout: "map-only",
      width,
      height,
    };
    const printedMap = await exportMap(propertyReportPrintTemplate);
    let reportUrl = `${propertyReportUrl}MSLINK=${mslink}&PROPERTY_NUMBER=${propertyNumber}&IMAGEURL=${printedMap.url}`;
    window.open(reportUrl, "_blank", windowFeatures);
    console.log("width", width);
    console.log("height:", height);
    setLoading(false);
  };
  return (
    <>
      <Button variant="contained" disabled={loading} onClick={onPropertyReportClick}>
        {loading ? <LoadingIcon /> : "Property Report"}
      </Button>
    </>
  );
};

export default PropertyReportButton;
