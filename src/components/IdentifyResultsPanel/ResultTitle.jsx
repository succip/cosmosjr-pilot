import React, { useState, useEffect } from "react";
import { highlightFeature } from "../../js/Identify";
import ResultAccordion from "../Common/ResultAccordion";
import AttributeTable from "./AttributeTable";
import AccordionGroup from "../Common/AccordionGroup";
import settings from "../../config/Settings";
import AddressList from "./AddressList";
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
      console.log(data);
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
        {addrList && (
          <AccordionGroup>
            <AddressList addresses={addrList} />
          </AccordionGroup>
        )}
      </ResultAccordion>
    </>
  );
};

export default ResultTitle;
