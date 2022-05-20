import store from "../store/store";
import PrintVM from "@arcgis/core/widgets/Print/PrintViewModel";
import PrintTemplate from "@arcgis/core/rest/support/PrintTemplate";
import { printServiceUrl, dpi, printLayouts } from "../config/PrintConfig";

const esriTestUrl =
  "https://utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task";

export const exportMap = async ({
  layout = "8.5x11 Landscape",
  format = "pdf",
  titleText = "",
  authorText = "",
}) => {
  const { view } = store.getState().app;

  const printTemplate = new PrintTemplate({
    layout: "MAP_ONLY",
    format,
    layoutOptions: {
      titleText,
      authorText,
    },
    exportOptions: {
      dpi,
    },
  });

  const printVM = new PrintVM({
    view,
    printServiceUrl,
  });

  const { url } = await printVM.print(printTemplate);
  return { titleText, url };
};
