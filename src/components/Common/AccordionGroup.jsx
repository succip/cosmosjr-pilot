import { useEffect, useState } from "react";
import ControlAccordion from "./ControlAccordion";

const AccordionGroup = (accordions) => {
  const [curAccordionId, setCurAccordionId] = useState(null);

  const handleChange = (id) => {
    setCurAccordionId(curAccordionId === id ? null : id);
  };

  useEffect(() => {
    setCurAccordionId(curAccordionId);
  }, [curAccordionId]);

  return accordions.map((accordion, index) => {
    return (
      <ControlAccordion
        accordionId={index}
        key={index}
        title={accordion.title}
        panel={accordion.component}
        handleChange={handleChange}
        expanded={curAccordionId === index}
      />
    );
  });
};

export default AccordionGroup;
