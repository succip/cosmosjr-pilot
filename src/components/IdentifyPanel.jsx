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
      {idResults.map((result, id) => {
        return (
          <>
            <p key={id}>
              {result.layerName} - {result.idValue}
            </p>
          </>
        );
      })}
    </>
  );
};

export default IdentifyPanel;
