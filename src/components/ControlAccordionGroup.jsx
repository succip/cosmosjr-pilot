import ControlAccordion from "./ControlAccordion";
import LayerLegendPanel from "./LayerLegendPanel";
import TestPanelContent from "./TestPanelContent";

const ControlAccordionGroup = () => {
  const handleChange = (id) => {
    console.log(id);
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
