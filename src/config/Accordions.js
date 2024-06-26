import LayerLegendPanel from "../components/LayerListLegendPanel/LayerLegendPanel";
import PrintSavePanel from "../components/PrintSave/PrintSavePanel";
import IdentifyPanel from "../components/IdentifyResultsPanel/IdentifyPanel";
import DrawPanel from "../components/Draw/DrawPanel";
import TestPanelContent from "../components/TestPanelContent";

const accordions = [
  {
    title: "Layer List & Legend",
    component: <LayerLegendPanel />,
  },
  {
    title: "Draw",
    component: <DrawPanel />,
  },
  {
    title: "Print & Save",
    component: <PrintSavePanel />,
  },
  {
    title: "Bind test",
    component: <TestPanelContent />,
  },
  {
    title: "Identify",
    component: <IdentifyPanel />,
  },
];

export default accordions;
