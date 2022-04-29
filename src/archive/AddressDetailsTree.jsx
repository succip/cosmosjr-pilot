import { addressDetails } from "../config/Settings";
import AddressDetailsTreeItem from "../components/IdentifyResultsPanel/AddressDetailsTree";

const AddressDetailsTree = ({ mslink, propertyNumber }) => {
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

export default AddressDetailsTree;
