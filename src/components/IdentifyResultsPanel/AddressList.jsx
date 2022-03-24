import AccordionGroup from "../Common/AccordionGroup";
import AddressResultAccordion from "./AddressResultAccordion";
import AddressDetailsPanel from "./AddressDetailsPanel";

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
