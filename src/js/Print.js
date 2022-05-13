import store from "../store/store";
import PrintVM from "@arcgis/core/widgets/Print/PrintViewModel";
import PrintTemplate from "@arcgis/core/rest/support/PrintTemplate";
import { printServiceUrl, dpi } from "../config/PrintConfig";

export const exportMap = ({ layout, format, titleText, authorText }) => {
  const { view } = store.getState().app;

  const printTemplate = new PrintTemplate({
    layout,
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

  printVM.print(printTemplate).then(({ url }) => {
    console.log(url);
  });
};
