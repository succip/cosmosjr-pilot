import { addressDetails } from "../../config/Settings";
import AddressDetailsTreeItem from "./AddressDetailsTreeItem";

const AddressDetailsPanel = ({ mslink, propertyNumber }) => {
  return (
    <>
      {addressDetails.map((detail) => {
        return (
          <AddressDetailsTreeItem
            key={detail.id}
            id={detail.id}
            label={detail.label}
            tableHeadings={detail.tableHeadings}
            url={detail.url}
            lookupValue={detail.lookupValue}
            mslink={mslink}
            propertyNumber={propertyNumber}
          />
        );
      })}
    </>
  );
};

export default AddressDetailsPanel;
