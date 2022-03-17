import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import PropertyDetailsTable from "../PropertyDetailsTable";
const axios = require("axios");

const ResultTitle = ({ result }) => {
  const { layerName, isLotLayer, displayValue } = result;
  const [expanded, setExpanded] = useState(false);
  const [addrList, setAddrList] = useState([]);

  const titleStyle = {
    fontWeight: "medium",
    textDecoration: "underline",
  };

  const expandResultTitle = async () => {
    setExpanded(!expanded);
    if (isLotLayer) {
      const url = `https://cosmos.surrey.ca/external/COSMOSWebServices/cosmos.svc/GetAddressData/${displayValue}`;
      const { data } = await axios.get(url);
      setAddrList(data);
    }
  };

  useEffect(() => {
    setExpanded(false);
    setAddrList([]);
  }, [result]);

  return (
    <>
      <Accordion expanded={expanded} onChange={expandResultTitle} disableGutters={true}>
        <AccordionSummary>
          <Typography sx={titleStyle}>
            {layerName} {displayValue && " - " + displayValue}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {addrList.map((address, key) => {
            return <Typography key={key}>{address.Field}</Typography>;
          })}
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default ResultTitle;
