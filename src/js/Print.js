import store from "../store/store";
import PrintVM from "@arcgis/core/widgets/Print/PrintViewModel";
import PrintTemplate from "@arcgis/core/rest/support/PrintTemplate";
const printServiceUrl =
  "https://gisservices.surrey.ca/arcgis/rest/services/PrintWebMap/GPServer/Export%20Web%20Map";
const esriSampleUrl =
  "https://utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task";

export const exportMap = () => {
  const { view } = store.getState().app;

  const printTemplate = new PrintTemplate({
    layout: "8.5x11 Landscape No Legend",
    format: "jpg",
    layoutOptions: {
      titleText: "super cool map of super cool things",
      authorText: "cool description what up",
    },
    exportOptions: {
      dpi: 100,
    },
  });

  const printVM = new PrintVM({
    view,
    printServiceUrl,
  });

  printVM.print(printTemplate).then(({ url }) => {
    console.log(url);
  });
};
