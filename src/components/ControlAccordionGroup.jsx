import { useState } from "react";
import ControlAccordion from "./ControlAccordion";
import accordions from "../config/Accordions";

const ControlAccordionGroup = () => {
  const [curAccordionId, setCurAccordionId] = useState(null);
  const handleChange = (id) => {
    setCurAccordionId(id);
  };

  return accordions.map((accordion, index) => {
    return (
      <ControlAccordion
        accordionId={index}
        key={index}
        title={accordion.title}
        panel={accordion.component}
        handleChange={handleChange}
      />
    );
  });
};

export default ControlAccordionGroup;
