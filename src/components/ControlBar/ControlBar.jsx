import ControlAccordionGroup from "./ControlAccordionGroup";
import AccordionGroupTest from "../Common/AccordionGroupTest";
import AccordionItem from "../Common/AccordionItem";

const Controlbar = () => {
  const titles = ["one", "two", "three"];
  return (
    <>
      <AccordionGroupTest>
        {titles.map((title, index) => {
          return (
            <AccordionItem key={index} title={title}>
              Inner title: {title}
            </AccordionItem>
          );
        })}
      </AccordionGroupTest>
      <ControlAccordionGroup />
    </>
  );
};

export default Controlbar;
