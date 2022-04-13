import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ResultTree from "./ResultTree";
import store from "../../store/store";
import { setActivePanel } from "../../store/actions/appActions";

const IdentifyPanel = () => {
  const [idResults, setIdResults] = useState([]);
  const { identifyResults } = useSelector((state) => state.app);

  useEffect(() => {
    setIdResults(identifyResults);
    if (identifyResults.length) {
      store.dispatch(setActivePanel(null));
      store.dispatch(setActivePanel(3));
    }
  }, [identifyResults]);

  return (
    <>
      <ResultTree results={idResults} />
    </>
  );
};

export default IdentifyPanel;
