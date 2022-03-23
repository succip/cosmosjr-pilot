import AccordionGroup from "../Common/AccordionGroup";
import ResultAccordion from "../Common/ResultAccordion";

const AddressList = ({ addresses, handleChange, accordionId, expanded }) => {
  const expandAddressTitle = () => {
    handleChange(accordionId);
    console.log(accordionId);
  };

  return (
    <>
      {addresses.map((address, key) => {
        return (
          <ResultAccordion
            expanded={expanded}
            onChange={expandAddressTitle}
            title={address.Field}
            key={key}
          >
            {address.Field}
          </ResultAccordion>
        );
      })}
    </>
  );
};

export default AddressList;
