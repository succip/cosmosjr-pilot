import LayerLegendPanel from "../components/LayerListLegendPanel/LayerLegendPanel";
import TestPanelContent from "../components/TestPanelContent";
import IdentifyPanel from "../components/IdentifyResultsPanel/IdentifyPanel";

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
