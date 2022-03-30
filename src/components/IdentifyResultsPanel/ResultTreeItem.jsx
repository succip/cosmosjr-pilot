import { useState } from "react";
import TreeItem from "@mui/lab/TreeItem";
import { highlightFeature } from "../../js/Identify";
import DetailsTable from "../Common/DetailsTable";

const ResultTreeItem = ({ result, index, onNodeClick }) => {
  const { layerName, feature, attributes, displayValue } = result;
  const [attributeList, setAttributeList] = useState([]);

  const onResultClick = async (nodeId) => {
    onNodeClick(nodeId);
    setAttributeList(attributes);
    highlightFeature(feature);
  };

  return (
    <TreeItem
      nodeId={index.toString()}
      label={`${layerName} - ${displayValue}`}
      onClick={() => onResultClick(index)}
      children={<DetailsTable data={attributeList} />}
    />
  );
};

export default ResultTreeItem;
