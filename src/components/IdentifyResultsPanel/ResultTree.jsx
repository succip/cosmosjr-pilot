import { useState, useEffect } from "react";
import TreeView from "@mui/lab/TreeView";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ResultTreeItem from "./ResultTreeItem";
import LotTreeItem from "./LotTreeItem";

const ResultTree = ({ results }) => {
  const [expanded, setExpanded] = useState([]);

  useEffect(() => {
    results.length && results[0].open ? setExpanded(["0"]) : setExpanded([]);
  }, [results]);

  const onNodeSelect = (event = undefined, value) => {
    const expandNode = [value.toString()];
    expandNode[0] === expanded[0] ? setExpanded([]) : setExpanded(expandNode);
  };

  return (
    <>
      <TreeView
        expanded={expanded}
        defaultExpandIcon={<LocationOnIcon />}
        defaultCollapseIcon={<LocationOnOutlinedIcon />}
        onNodeSelect={onNodeSelect}
      >
        {results.map((result, index) => {
          return result.isLotLayer ? (
            <LotTreeItem key={index} result={result} index={index} />
          ) : (
            <ResultTreeItem key={index} result={result} index={index} />
          );
        })}
      </TreeView>
    </>
  );
};

export default ResultTree;
