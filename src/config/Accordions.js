import LayerLegendPanel from "../components/LayerLegendPanel";
import TestPanelContent from "../components/TestPanelContent";

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
    component: <TestPanelContent />,
  },
];

export default accordions;
