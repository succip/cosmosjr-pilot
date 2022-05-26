import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import ResultTree from "./ResultTree";
import LoadingIcon from "../Common/LoadingIcon";
import store from "../../store/store";
import { setActivePanel } from "../../store/actions/appActions";

const IdentifyPanel = () => {
  const [idResults, setIdResults] = useState([]);
  const [message, setMessage] = useState("");
  const { identifyResults, identifyLoading } = useSelector((state) => state.app);

  useEffect(() => {
    setIdResults(identifyResults);
    setMessage(identifyResults.length ? "" : "No Results found!");
  }, [identifyResults]);

  useEffect(() => {
    store.dispatch(setActivePanel(null));
    store.dispatch(setActivePanel(3));
  }, [identifyLoading]);

  return (
    <>
      {identifyLoading ? (
        <Grid item align="center">
          {<LoadingIcon />}
        </Grid>
      ) : (
        <>
          <ResultTree results={idResults} />
          {!identifyResults.length && !identifyLoading && message}
        </>
      )}
    </>
  );
};

export default IdentifyPanel;
