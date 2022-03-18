import React, { useEffect, useState } from "react";
import ResultAccordion from "../Common/ResultAccordion";
import AttributeTable from "./AttributeTable";

const ResultTitle = ({ result }) => {
  const { layerName, displayValue, attributes } = result;
  const wrapperTitle = `${layerName} - ${displayValue}`;

  const [expanded, setExpanded] = useState(false);
  const [attList, setAttList] = useState([]);

  const expandResultTitle = () => {
    setExpanded(!expanded);
    setAttList(attributes);
  };

  useEffect(() => {
    setExpanded(false);
  }, [result]);

  return (
    <>
      <ResultAccordion expanded={expanded} onChange={expandResultTitle} title={wrapperTitle}>
        {attList && <AttributeTable attributes={attList} />}
      </ResultAccordion>
    </>
  );
};

export default ResultTitle;
