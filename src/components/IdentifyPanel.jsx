import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const IdentifyPanel = () => {
  const [idResults, setIdResults] = useState([]);
  const { identifyResults } = useSelector((state) => state.app);

  useEffect(() => {
    setIdResults(identifyResults);
  }, [identifyResults]);

  return (
    <>
      {idResults.map(({ layerName, displayValue }, key) => {
        return (
          <p key={key}>
            {layerName} {displayValue && displayValue}
          </p>
        );
      })}
    </>
  );
};

export default IdentifyPanel;
