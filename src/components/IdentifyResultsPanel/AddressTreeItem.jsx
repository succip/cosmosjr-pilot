import TreeItem from "@mui/lab/TreeItem";
import AddressDetailsPanel from "./AddressDetailsPanel";

const AddressTreeItem = ({ address, index, onNodeClick, mslink }) => {
  const onAddressClick = (nodeId) => {
    onNodeClick(nodeId);
  };

  return (
    <TreeItem
      nodeId={index.toString()}
      label={address.Field}
      onClick={() => onAddressClick(index)}
      children={<AddressDetailsPanel mslink={mslink} />}
    />
  );
};

export default AddressTreeItem;
