import { useState } from "react";
import TreeItem from "@mui/lab/TreeItem";
import AddressTree from "./AddressTree";
import settings from "../../config/Settings";
import { highlightFeature } from "../../js/Identify";
const axios = require("axios");

const ResultTreeItem = ({ result, index, onNodeClick }) => {
  const { layerName, feature, displayValue } = result;
  const [addressList, setAddressList] = useState([]);

  const onResultClick = async (nodeId) => {
    onNodeClick(nodeId);
    setAddressList([]);
    const url = `${settings.dataServiceUrl}/GetAddressData/${displayValue}`;
    const { data } = await axios.get(url);
    setAddressList(data);
    highlightFeature(feature);
  };

  return (
    <TreeItem
      nodeId={index.toString()}
      label={`${layerName} - ${displayValue}`}
      onClick={() => onResultClick(index)}
      children={<AddressTree addresses={addressList} />}
    />
  );
};

export default ResultTreeItem;
