import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ResultTitle from "./ResultTitle";

const IdentifyPanel = () => {
  const [idResults, setIdResults] = useState([]);
  const { identifyResults } = useSelector((state) => state.app);

  useEffect(() => {
    setIdResults(identifyResults);
  }, [identifyResults]);

  return (
    <>
      {idResults.map((result, key) => {
        return <ResultTitle result={result} key={key} />;
      })}
    </>
  );
};

export default IdentifyPanel;
