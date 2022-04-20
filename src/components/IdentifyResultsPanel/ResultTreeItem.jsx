import { useEffect, useState } from "react";
import TreeItem from "@mui/lab/TreeItem";
import { highlightFeature } from "../../js/Identify";
import DetailsTable from "../Common/DetailsTable";

const ResultTreeItem = ({ result, index }) => {
  const { layerName, feature, attributes, displayValue } = result;
  const [attributeList, setAttributeList] = useState([]);

  const onResultClick = async () => {
    setAttributeList(attributes);
    highlightFeature(feature);
  };

  useEffect(() => {
    if (result.open) onResultClick();
  }, [result]);

  return (
    <TreeItem
      nodeId={index.toString()}
      label={`${layerName} - ${displayValue}`}
      onClick={onResultClick}
      children={<DetailsTable data={attributeList} />}
    />
  );
};

export default ResultTreeItem;
