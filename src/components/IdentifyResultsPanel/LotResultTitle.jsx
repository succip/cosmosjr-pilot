import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import ResultAccordion from "../Common/ResultAccordion";
import Settings from "../../config/Settings";
const axios = require("axios");

const ResultTitle = ({ result }) => {
  const { layerName, displayValue } = result;
  const [expanded, setExpanded] = useState(false);
  const [addrList, setAddrList] = useState([]);

  const expandResultTitle = async () => {
    setExpanded(!expanded);
    const url = `${Settings.dataServiceUrl}/GetAddressData/${displayValue}`;
    const { data } = await axios.get(url);
    setAddrList(data);
  };

  useEffect(() => {
    setExpanded(false);
    setAddrList([]);
  }, [result]);

  const wrapperTitle = `${layerName} - ${displayValue}`;

  return (
    <>
      <ResultAccordion expanded={expanded} onChange={expandResultTitle} title={wrapperTitle}>
        {addrList.map((address, key) => {
          return <Typography key={key}>{address.Field}</Typography>;
        })}
      </ResultAccordion>
    </>
  );
};

export default ResultTitle;
