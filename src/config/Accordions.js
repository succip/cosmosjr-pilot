import LayerLegendPanel from "../components/LayerListLegendPanel/LayerLegendPanel";
import DrawPanel from "../components/Draw/DrawPanel";
import PrintSavePanel from "../components/PrintSave/PrintSavePanel";
import IdentifyPanel from "../components/IdentifyResultsPanel/IdentifyPanel";

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
