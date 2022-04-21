import { useState, useEffect } from "react";
import TreeView from "@mui/lab/TreeView";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import AddressTreeItem from "./AddressTreeItem";

const ResultTree = ({ addresses, mslink }) => {
  const [expanded, setExpanded] = useState([]);

  const onNodeSelect = (event = undefined, value) => {
    const expandNode = [value.toString()];
    expandNode[0] === expanded[0] ? setExpanded([]) : setExpanded(expandNode);
  };

  useEffect(() => {
    addresses.length === 1 ? setExpanded(["0"]) : setExpanded([]);
  }, [addresses]);

  return (
    <>
      <TreeView
        expanded={expanded}
        defaultCollapseIcon={<HomeWorkOutlinedIcon />}
        defaultExpandIcon={<HomeWorkIcon />}
        onNodeSelect={onNodeSelect}
      >
        {addresses.map((address, index) => {
          return <AddressTreeItem key={index} address={address} index={index} mslink={mslink} />;
        })}
      </TreeView>
    </>
  );
};

export default ResultTree;
