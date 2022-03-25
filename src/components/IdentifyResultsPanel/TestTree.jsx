import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import TreeItem from "@mui/lab/TreeItem";
import TreeView from "@mui/lab/TreeView";
import FolderIcon from "@mui/icons-material/Folder";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import AttributeTable from "./AttributeTable";

const TestTree = () => {
  const [idResults, setIdResults] = useState([]);
  const { identifyResults } = useSelector((state) => state.app);
  const [expanded, setExpanded] = useState([]);

  useEffect(() => {
    setIdResults(identifyResults);
  }, [identifyResults]);

  const onNodeToggle = (undefined, nodeIds) => {
    console.log(nodeIds);
    setExpanded([]);
    setExpanded(nodeIds);
  };

  useEffect(() => {
    setExpanded([]);
  }, [idResults]);

  return (
    <>
      <TreeView
        onNodeToggle={onNodeToggle}
        expanded={expanded && expanded}
        defaultCollapseIcon={<FolderOpenIcon />}
        defaultExpandIcon={<FolderIcon />}
      >
        {idResults.map((result, index) => {
          return (
            <TreeItem
              nodeId={index.toString()}
              key={index}
              label={result.displayValue}
              children={<AttributeTable attributes={result.attributes} />}
            />
          );
        })}
      </TreeView>
    </>
  );
};

export default TestTree;
