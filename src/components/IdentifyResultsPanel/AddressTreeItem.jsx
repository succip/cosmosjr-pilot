import TreeItem from "@mui/lab/TreeItem";
import { addressDetails } from "../../config/Settings";
import AddressDetailsTree from "./AddressDetailsTree";
import PropertyReportButton from "./PropertyReportButton";

const AddressTreeItem = ({ address, index, mslink }) => {
  return (
    <>
      <TreeItem
        nodeId={index.toString()}
        label={address.Field}
        children={addressDetails.map((detail) => {
          return (
            <AddressDetailsTree
              key={detail.id}
              id={detail.id}
              label={detail.label}
              tableHeadings={detail.tableHeadings}
              url={detail.url}
              lookupValue={detail.lookupValue}
              mslink={mslink}
              propertyNumber={address.Value}
            />
          );
        })}
      />
      <PropertyReportButton mslink={mslink} propertyNumber={address.Value} />
    </>
  );
};

export default AddressTreeItem;
