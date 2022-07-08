import LayerLegendPanel from "../components/LayerListLegendPanel/LayerLegendPanel";
import PrintSavePanel from "../components/PrintSave/PrintSavePanel";
import IdentifyPanel from "../components/IdentifyResultsPanel/IdentifyPanel";
import DrawPanel from "../components/Draw/DrawPanel";
import DrawTest from "../components/Draw/DrawTest/DrawTest";

const accordions = [
  {
    title: "Layer List & Legend",
    component: <LayerLegendPanel />,
  },
  {
    title: "Draw",
    component: <DrawTest />,
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
