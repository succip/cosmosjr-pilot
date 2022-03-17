import LayerListItem from "./LayerListItem";
import { getMapLayerByTitle } from "../../js/Layers";
import TreeItem from "@mui/lab/TreeItem";
import TreeView from "@mui/lab/TreeView";
import FolderIcon from "@mui/icons-material/Folder";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { useSelector } from "react-redux";

const getTreeItemsFromData = (treeItems) => {
  return treeItems.map((treeItemData) => {
    let children = undefined;
    const mapLayer = getMapLayerByTitle(treeItemData.name);
    if (treeItemData.children && treeItemData.children.length > 0) {
      children = getTreeItemsFromData(treeItemData.children);
    }
    return mapLayer ? (
      <TreeItem
        nodeId={treeItemData.id}
        key={treeItemData.id}
        label={<LayerListItem mapLayer={mapLayer} />}
        children={children}
      />
    ) : (
      <TreeItem
        nodeId={treeItemData.id}
        key={treeItemData.id}
        label={treeItemData.name}
        children={children}
      />
    );
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
