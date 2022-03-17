import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ResultTitle from "./ResultTitle";
import LotResultTitle from "./LotResultTitle";

const IdentifyPanel = () => {
  const [idResults, setIdResults] = useState([]);
  const { identifyResults } = useSelector((state) => state.app);

  useEffect(() => {
    setIdResults(identifyResults);
  }, [identifyResults]);

  return (
    <>
      {idResults.map((result, key) => {
        return result.isLotLayer ? (
          <LotResultTitle result={result} key={key} />
        ) : (
          <ResultTitle result={result} key={key} />
        );
      })}
    </>
  );
};

export default IdentifyPanel;
