import store from "../store/store";
import PrintVM from "@arcgis/core/widgets/Print/PrintViewModel";
import PrintTemplate from "@arcgis/core/rest/support/PrintTemplate";
import { printServiceUrl, dpi } from "../config/PrintConfig";

export const exportMap = async ({
  layout = "8.5x11 Landscape",
  format = "png32",
  titleText = "",
  authorText = "",
  width = 400,
  height = 400,
}) => {
  const { view } = store.getState().app;

  const printTemplate = new PrintTemplate({
    layout,
    format,
    layoutOptions: {
      titleText,
      authorText,
    },
    exportOptions: {
      width,
      height,
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
