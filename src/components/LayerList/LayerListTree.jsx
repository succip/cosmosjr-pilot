import LayerListItem from "./LayerListItem";
import TreeItem from "@mui/lab/TreeItem";
import TreeView from "@mui/lab/TreeView";
import FolderIcon from "@mui/icons-material/Folder";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { useSelector } from "react-redux";
import store from "../../store/store";

const getMapLayerByTitle = (mapLayerTitle) => {
  const { layers } = store.getState();
  const { mapLayers } = layers;
  return mapLayers.find((mapLayer) => mapLayer.title === mapLayerTitle);
};

const getTreeItemsFromData = (treeItems) => {
  return treeItems.map((treeItemData) => {
    let children = undefined;
    const mapLayer = getMapLayerByTitle(treeItemData.name);
    if (treeItemData.children && treeItemData.children.length > 0) {
      children = getTreeItemsFromData(treeItemData.children);
    }
    return <TreeItem nodeId={treeItemData.id} key={treeItemData.id} label={treeItemData.name} children={children} />;
  });
};

const LayerListTree = ({ treeItems }) => {
  const { mapLayers } = useSelector((state) => state.layers);

  return (
    <>
      {mapLayers && (
        <TreeView defaultCollapseIcon={<FolderOpenIcon />} defaultExpandIcon={<FolderIcon />}>
          {getTreeItemsFromData(treeItems)}
        </TreeView>
      )}
    </>
  );
};

export default LayerListTree;
