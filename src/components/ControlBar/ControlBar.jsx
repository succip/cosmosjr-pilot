import ControlAccordionGroup from "./ControlAccordionGroup";
import AccordionGroup from "../Common/AccordionGroup";
import AccordionGroupItemTest from "../Common/AccordionGroupItemTest";

const Controlbar = () => {
  const testTitles = ["one", "two", "three"];
  return (
    <>
      <AccordionGroup accordionType={AccordionGroupItemTest} content={testTitles} />
      <ControlAccordionGroup />
    </>
  );
};

export default Controlbar;
