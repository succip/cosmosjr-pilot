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
      {idResults.map(({ layerName, idValue }, key) => {
        return (
          <p key={key}>
            {layerName} {idValue ? idValue : null}
          </p>
        );
      })}
    </>
  );
};

export default IdentifyPanel;
