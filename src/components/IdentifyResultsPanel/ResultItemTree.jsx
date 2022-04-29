import { useEffect, useState } from "react";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import DetailsTable from "../Common/DetailsTable";
import { highlightFeature } from "../../js/Identify";

const ResultItemTree = ({ result, handleExpand, expanded }) => {
  const { layerName, feature, attributes, displayValue } = result;
  const [attributeList, setAttributeList] = useState([]);

  useEffect(() => {
    if (result.open) setAttributeList(attributes);
  }, [result]);

  const onNodeToggle = (event = undefined, nodeIds) => {
    setAttributeList(attributes);
    highlightFeature(feature);
    handleExpand(nodeIds);
  };

  return (
    <TreeView
      defaultExpandIcon={<LocationOnIcon />}
      defaultCollapseIcon={<LocationOnOutlinedIcon />}
      onNodeToggle={onNodeToggle}
      expanded={expanded}
    >
      <TreeItem
        nodeId={result.id.toString()}
        label={`${layerName} - ${displayValue}`}
        children={<DetailsTable data={attributeList} />}
      />
    </TreeView>
  );
};

export default ResultItemTree;
