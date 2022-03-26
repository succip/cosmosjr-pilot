import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import TreeItem from "@mui/lab/TreeItem";
import TreeView from "@mui/lab/TreeView";
import FolderIcon from "@mui/icons-material/Folder";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import AttributeTable from "./AttributeTable";
import { highlightFeature } from "../../js/Identify";

const ResultTreeItem = ({ result, index, onFolderClick }) => {
  const onResultClick = (nodeId) => {
    onFolderClick(nodeId);
    highlightFeature(result.feature);
  };
  return (
    <TreeItem
      nodeId={index.toString()}
      label={result.displayValue}
      onClick={() => onResultClick(index)}
      children={<p>{result.displayValue}</p>}
    />
  );
};

const TestTree = () => {
  const [idResults, setIdResults] = useState([]);
  const { identifyResults } = useSelector((state) => state.app);
  const [expanded, setExpanded] = useState([]);

  useEffect(() => {
    setIdResults(identifyResults);
  }, [identifyResults]);

  const onFolderClick = (nodeId) => {
    const expandNodes = [nodeId.toString()];
    expandNodes[0] === expanded[0] ? setExpanded([]) : setExpanded(expandNodes);
  };

  useEffect(() => {
    setExpanded([]);
  }, [idResults]);

  return (
    <>
      <TreeView
        expanded={expanded}
        defaultCollapseIcon={<FolderOpenIcon />}
        defaultExpandIcon={<FolderIcon />}
      >
        {idResults.map((result, index) => {
          return (
            <ResultTreeItem
              key={index}
              result={result}
              index={index}
              onFolderClick={onFolderClick}
            />
          );
        })}
      </TreeView>
    </>
  );
};

export default TestTree;
