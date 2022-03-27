import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ResultTree from "./ResultTree";

const IdentifyPanel = () => {
  const [idResults, setIdResults] = useState([]);
  const { identifyResults } = useSelector((state) => state.app);

  useEffect(() => {
    setIdResults(identifyResults);
  }, [identifyResults]);

  return (
    <>
      <ResultTree results={idResults} />
    </>
  );
};

export default IdentifyPanel;
