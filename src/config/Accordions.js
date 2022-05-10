import LayerLegendPanel from "../components/LayerListLegendPanel/LayerLegendPanel";
import PrintSavePanel from "../components/PrintSave/PrintSavePanel";
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
    title: "Print & Save",
    component: <PrintSavePanel />,
  },
  {
    title: "Identify",
    component: <IdentifyPanel />,
  },
];

export default accordions;
