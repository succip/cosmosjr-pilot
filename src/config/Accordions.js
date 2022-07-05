import LayerLegendPanel from "../components/LayerListLegendPanel/LayerLegendPanel";
import PrintSavePanel from "../components/PrintSave/PrintSavePanel";
import IdentifyPanel from "../components/IdentifyResultsPanel/IdentifyPanel";
import DrawPanel from "../components/Draw/DrawPanel";

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
    title: "Identify",
    component: <IdentifyPanel />,
  },
];

export default accordions;
