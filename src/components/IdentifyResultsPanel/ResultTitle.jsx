import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { highlightFeature } from "../../js/Identify";
import ResultAccordion from "../Common/ResultAccordion";
import AttributeTable from "./AttributeTable";
import settings from "../../config/Settings";
const axios = require("axios");

const ResultTitle = ({ result, handleChange, accordionId, expanded }) => {
  const { layerName, displayValue, feature, attributes, isLotLayer } = result;
  const wrapperTitle = `${layerName} - ${displayValue}`;

  const [attList, setAttList] = useState([]);
  const [addrList, setAddrList] = useState([]);

  const expandResultTitle = async () => {
    if (isLotLayer) {
      const url = `${settings.dataServiceUrl}/GetAddressData/${displayValue}`;
      const { data } = await axios.get(url);
      setAddrList(data);
    } else {
      setAttList(attributes);
    }
    handleChange(accordionId);
    highlightFeature(feature);
  };

  useEffect(() => {
    setAttList([]);
    setAddrList([]);
  }, [result]);

  return (
    <>
      <ResultAccordion expanded={expanded} onChange={expandResultTitle} title={wrapperTitle}>
        {attList && <AttributeTable attributes={attList} />}
        {addrList &&
          addrList.map((address, key) => {
            return (
              <ResultAccordion title={address.Field} key={key}>
                {address.Field}
              </ResultAccordion>
            );
          })}
      </ResultAccordion>
    </>
  );
};

export default ResultTitle;
