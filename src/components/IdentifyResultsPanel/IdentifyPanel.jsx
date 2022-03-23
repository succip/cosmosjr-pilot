import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AccordionGroup from "../Common/AccordionGroup";
import ResultTitle from "./ResultTitle";

const IdentifyPanel = () => {
  const [idResults, setIdResults] = useState([]);
  const { identifyResults } = useSelector((state) => state.app);

  useEffect(() => {
    setIdResults(identifyResults);
  }, [identifyResults]);

  return (
    <>
      <AccordionGroup>
        {idResults.map((result, index) => {
          return <ResultTitle key={index} result={result} />;
        })}
      </AccordionGroup>
    </>
  );
};

export default IdentifyPanel;
