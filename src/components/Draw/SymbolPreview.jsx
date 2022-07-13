import { useEffect, useRef } from "react";
import * as symbolUtils from "@arcgis/core/symbols/support/symbolUtils";
import InputLabel from "@mui/material/InputLabel";

const SymbolPreview = ({ symbol }) => {
  const previewRef = useRef(null);

  const updatePreview = () => {
    previewRef.current.innerHTML = "";
    symbolUtils.renderPreviewHTML(symbol, {
      node: previewRef.current,
      size: 60,
      maxSize: 60,
    });
  };

  useEffect(() => {
    if (previewRef.current) {
      updatePreview();
    }
  }, [symbol]);

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
