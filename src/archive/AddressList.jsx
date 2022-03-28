import AccordionGroup from "../components/Common/AccordionGroup";
import AddressResultAccordion from "./AddressResultAccordion";
import AddressDetailsPanel from "../components/IdentifyResultsPanel/AddressDetailsPanel";

const AddressList = ({ addresses, mslink }) => {
  return (
    <>
      <AccordionGroup>
        {addresses.map((address, key) => {
          return (
            <AddressResultAccordion key={key} title={address.Field}>
              <AddressDetailsPanel mslink={mslink} />
            </AddressResultAccordion>
          );
        })}
      </AccordionGroup>
    </>
  );
};

export default AddressList;
