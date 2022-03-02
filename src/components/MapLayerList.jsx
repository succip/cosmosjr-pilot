import React from "react";
import TreeItem from "@mui/lab/TreeItem";
import TreeView from "@mui/lab/TreeView";
import LayerStore from "../config/LayerStore";
import FolderIcon from "@mui/icons-material/Folder";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";

const getTreeItemsFromData = (treeItems) => {
  return treeItems.map((treeItemData) => {
    let children = undefined;
    if (treeItemData.children && treeItemData.children.length > 0) {
      children = getTreeItemsFromData(treeItemData.children);
    }
    return <TreeItem nodeId={treeItemData.id} key={treeItemData.name} label={treeItemData.name} children={children} />;
  });
};

const DataTreeView = ({ treeItems }) => {
  return (
    <TreeView defaultCollapseIcon={<FolderOpenIcon />} defaultExpandIcon={<FolderIcon />}>
      {getTreeItemsFromData(treeItems)}
    </TreeView>
  );
};

const MapLayerList = () => {
  return (
    <div>
      <p className="h4">Layer List</p>
      <DataTreeView treeItems={LayerStore} />
    </div>
  );
};

export default MapLayerList;
