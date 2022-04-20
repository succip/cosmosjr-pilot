import TreeItem from "@mui/lab/TreeItem";
import AddressDetailsTree from "./AddressDetailsTree";

const AddressTreeItem = ({ address, index, mslink }) => {
  return (
    <TreeItem
      nodeId={index.toString()}
      label={address.Field}
      children={<AddressDetailsTree propertyNumber={address.Value} mslink={mslink} />}
    />
  );
};

export default AddressTreeItem;
