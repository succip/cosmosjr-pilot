import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import ResultAccordion from "../Common/ResultAccordion";
import Settings from "../../config/Settings";
import { highlightFeature } from "../../js/Identify";
const axios = require("axios");

const ResultTitle = ({ result, handleChange, accordionId, expanded }) => {
  const { layerName, displayValue, feature } = result;
  const [addrList, setAddrList] = useState([]);

  const expandResultTitle = async () => {
    const url = `${Settings.dataServiceUrl}/GetAddressData/${displayValue}`;
    const { data } = await axios.get(url);
    setAddrList(data);
    handleChange(accordionId);
    highlightFeature(feature);
  };

  useEffect(() => {
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
