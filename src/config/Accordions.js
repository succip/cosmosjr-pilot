import LayerLegendPanel from "../components/LayerLegendPanel";
import TestPanelContent from "../components/TestPanelContent";
import IdentifyPanel from "../components/IdentifyPanel";

const accordions = [
  {
    title: "Layer List & Legend",
    component: <LayerLegendPanel />,
  },
  {
    title: "Document Search",
    component: <TestPanelContent />,
  },
  {
    title: "Measure",
    component: <TestPanelContent />,
  },
  {
    title: "Identify",
    component: <IdentifyPanel />,
  },
];

export default accordions;
