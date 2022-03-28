import { useState, useEffect } from "react";
import TreeView from "@mui/lab/TreeView";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import AddressTreeItem from "./AddressTreeItem";

const ResultTree = ({ addresses, mslink }) => {
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
        defaultCollapseIcon={<HomeWorkOutlinedIcon />}
        defaultExpandIcon={<HomeWorkIcon />}
      >
        {addresses.map((address, index) => {
          return (
            <AddressTreeItem
              key={index}
              address={address}
              index={index}
              onNodeClick={onNodeClick}
              mslink={mslink}
            />
          );
        })}
      </TreeView>
    </>
  );
};

export default ResultTree;
