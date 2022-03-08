import { useState } from "react";
import ControlAccordion from "./ControlAccordion";
import LayerLegendPanel from "./LayerLegendPanel";
import TestPanelContent from "./TestPanelContent";

const ControlAccordionGroup = () => {
  const [curAccordionId, setCurAccordionId] = useState(null);
  const handleChange = (id) => {
    setCurAccordionId(id);
  };

  return (
    <>
      <ControlAccordion
        handleChange={handleChange}
        accordionId={0}
        title={"Layers & Legend"}
        panel={<LayerLegendPanel />}
      />
      <ControlAccordion
        handleChange={handleChange}
        accordionId={1}
        title={"Identify"}
        panel={<TestPanelContent />}
      />
    </>
  );
};

export default ControlAccordionGroup;
