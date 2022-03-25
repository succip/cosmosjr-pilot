import React, { useState, useEffect } from "react";
import { highlightFeature } from "../../js/Identify";
import ResultAccordion from "../Common/ResultAccordion";
import AttributeTable from "./AttributeTable";
import settings from "../../config/Settings";
import AddressList from "./AddressList";
import AccordionItem from "../Common/AccordionItem";
const axios = require("axios");

const ResultTitle = ({ result, onChange, expanded }) => {
  const { layerName, displayValue, feature, attributes, isLotLayer } = result;
  const wrapperTitle = `${layerName} - ${displayValue}`;

  const [attList, setAttList] = useState([]);
  const [addrList, setAddrList] = useState([]);

  const expandResultTitle = async () => {
    if (isLotLayer && !expanded) {
      const url = `${settings.dataServiceUrl}/GetAddressData/${displayValue}`;
      const { data } = await axios.get(url);
      setAddrList(data);
    } else if (!isLotLayer) {
      setAttList(attributes);
    }
    onChange();
    highlightFeature(feature);
  };

  useEffect(() => {
    setAttList([]);
    setAddrList([]);
  }, [result]);

  return (
    <>
      <AccordionItem expanded={expanded} onChange={expandResultTitle} title={wrapperTitle}>
        {attList && <AttributeTable attributes={attList} />}
        {addrList && <AddressList addresses={addrList} mslink={result.displayValue} />}
      </AccordionItem>
    </>
  );
};

export default ResultTitle;
