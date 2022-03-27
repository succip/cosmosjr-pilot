import { useState, useEffect } from "react";
import TreeView from "@mui/lab/TreeView";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ResultTreeItem from "./ResultTreeItem";
import LotTreeItem from "./LotTreeItem";

const ResultTree = ({ results }) => {
  const [expanded, setExpanded] = useState([]);

  const onNodeClick = (nodeId) => {
    const expandNodes = [nodeId.toString()];
    expandNodes[0] === expanded[0] ? setExpanded([]) : setExpanded(expandNodes);
  };

  useEffect(() => {
    setExpanded([]);
  }, [results]);

  return (
    <>
      <TreeView
        expanded={expanded}
        defaultCollapseIcon={<KeyboardArrowDownIcon />}
        defaultExpandIcon={<KeyboardArrowRightIcon />}
      >
        {results.map((result, index) => {
          return result.isLotLayer ? (
            <LotTreeItem key={index} result={result} index={index} onNodeClick={onNodeClick} />
          ) : (
            <ResultTreeItem key={index} result={result} index={index} onNodeClick={onNodeClick} />
          );
        })}
      </TreeView>
    </>
  );
};

export default ResultTree;
