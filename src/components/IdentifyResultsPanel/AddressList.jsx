import AccordionGroup from "../Common/AccordionGroup";
import ResultAccordion from "../Common/ResultAccordion";

const AddressList = ({ addresses, handleChange, accordionId, expanded }) => {
  console.log(addresses);
  const expandAddressTitle = () => {
    console.log("accordionid", accordionId);
    handleChange(accordionId);
    console.log(accordionId);
  };

  return (
    <>
      <AccordionGroup>
        {addresses.map((address, key) => {
          return (
            <ResultAccordion
              key={key}
              expanded={expanded}
              onChange={expandAddressTitle}
              title={address.Field}
            >
              {address.Field}
            </ResultAccordion>
          );
        })}
      </AccordionGroup>
    </>
  );
};

export default AddressList;
