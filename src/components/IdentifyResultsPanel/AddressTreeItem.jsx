import TreeItem from "@mui/lab/TreeItem";
import AddressDetailsTree from "./AddressDetailsTree";

const AddressTreeItem = ({ address, index, onNodeClick, mslink }) => {
  const onAddressClick = (nodeId) => {
    onNodeClick(nodeId);
  };

  return (
    <TreeItem
      nodeId={index.toString()}
      label={address.Field}
      onClick={() => onAddressClick(index)}
      children={<AddressDetailsTree propertyNumber={address.Value} mslink={mslink} />}
    />
  );
};

export default AddressTreeItem;
