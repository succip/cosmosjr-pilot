import TreeItem from "@mui/lab/TreeItem";
import TreeView from "@mui/lab/TreeView";
import FolderIcon from "@mui/icons-material/Folder";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import React from "react";

const getTreeItemsFromData = (treeItems) => {
  return treeItems.map((treeItemData) => {
    let children = undefined;
    if (treeItemData.children && treeItemData.children.length > 0) {
      children = getTreeItemsFromData(treeItemData.children);
    }
    return <TreeItem nodeId={treeItemData.id} key={treeItemData.id} label={treeItemData.name} children={children} />;
  });
};

const LayerListTree = ({ treeItems }) => {
  return (
    <>
      <TreeView defaultCollapseIcon={<FolderOpenIcon />} defaultExpandIcon={<FolderIcon />}>
        {getTreeItemsFromData(treeItems)}
      </TreeView>
    </>
  );
};

export default LayerListTree;
