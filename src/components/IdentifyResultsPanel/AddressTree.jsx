import { useState, useEffect } from "react";
import TreeView from "@mui/lab/TreeView";
import FolderIcon from "@mui/icons-material/Folder";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import AddressTreeItem from "./AddressTreeItem";

const ResultTree = ({ addresses }) => {
  const [expanded, setExpanded] = useState([]);

  const onNodeClick = (nodeId) => {
    const expandNodes = [nodeId.toString()];
    expandNodes[0] === expanded[0] ? setExpanded([]) : setExpanded(expandNodes);
  };

  useEffect(() => {
    setExpanded([]);
  }, [addresses]);

  return (
    <>
      <TreeView
        expanded={expanded}
        defaultCollapseIcon={<FolderOpenIcon />}
        defaultExpandIcon={<FolderIcon />}
      >
        {addresses.map((address, index) => {
          return (
            <AddressTreeItem
              key={index}
              address={address}
              index={index}
              onNodeClick={onNodeClick}
            />
          );
        })}
      </TreeView>
    </>
  );
};

export default ResultTree;
