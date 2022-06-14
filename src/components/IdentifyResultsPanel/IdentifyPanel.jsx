import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import ResultTree from "./ResultTree";
import LoadingIcon from "../Common/LoadingIcon";
import { setActivePanel } from "../../store/actions/appActions";

const IdentifyPanel = () => {
  const [idResults, setIdResults] = useState([]);
  const [message, setMessage] = useState("");
  const { identifyResults, identifyLoading } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    setIdResults(identifyResults);
    setMessage(identifyResults.length ? "" : "Click an area on the map to identify map layers.");
  }, [identifyResults]);

  useEffect(() => {
    dispatch(setActivePanel(null));
    dispatch(setActivePanel(3));
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
