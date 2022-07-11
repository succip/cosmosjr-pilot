import { useEffect, useRef } from "react";
import * as symbolUtils from "@arcgis/core/symbols/support/symbolUtils";
import InputLabel from "@mui/material/InputLabel";

const SymbolPreview = ({ symbol, polySymbol, lineSymbol }) => {
  const previewRef = useRef(null);

  useEffect(() => {
    if (previewRef.current) {
      previewRef.current.innerHTML = "";
      symbolUtils.renderPreviewHTML(symbol, {
        node: previewRef.current,
        size: 50,
      });
    }
  }, [polySymbol, lineSymbol]);

  return (
    <>
      {symbol && (
        <>
          <InputLabel>Preview</InputLabel>
          <div ref={previewRef}></div>
        </>
      )}
    </>
  );
};

export default SymbolPreview;
