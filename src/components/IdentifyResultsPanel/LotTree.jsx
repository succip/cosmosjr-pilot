import { useEffect, useState } from "react";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LoadingIcon from "../Common/LoadingIcon";
import AddressTree from "./AddressTree";
import settings from "../../config/Settings";
import { highlightFeature } from "../../js/Identify";
const axios = require("axios");

const LotTree = ({ result, handleExpand, expanded }) => {
  const { layerName, feature, displayValue } = result;
  const [addressList, setAddressList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (result.open) fetchAddresses();
  }, [result]);

  const onNodeToggle = async (event = undefined, nodeIds) => {
    if (!addressList.length) await fetchAddresses();
    highlightFeature(feature);
    handleExpand(nodeIds);
  };

  const fetchAddresses = async () => {
    setLoading(true);
    setAddressList([]);
    const url = `${settings.dataServiceUrl}/GetAddressData/${displayValue}`;
    const { data } = await axios.get(url);
    setAddressList(data);
    setLoading(false);
  };

  return (
    <TreeView
      defaultExpandIcon={loading ? <LoadingIcon /> : <LocationOnIcon />}
      defaultCollapseIcon={<LocationOnOutlinedIcon />}
      onNodeToggle={onNodeToggle}
      expanded={expanded}
    >
      <TreeItem
        nodeId={result.id.toString()}
        label={`${layerName} - ${displayValue}`}
        children={<AddressTree mslink={result.displayValue} addresses={addressList} />}
      />
    </TreeView>
  );
};

export default LotTree;
