import Button from "@mui/material/Button";
import * as symbolUtils from "@arcgis/core/symbols/support/symbolUtils";
import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { colorList } from "../../config/DrawConfig";

const SymbolPreview = ({ symbol }) => {
  const sketchVM = useSelector((state) => state.app);
  const previewRef = useRef(null);

  useEffect(() => {
    console.log("rendered");
  }, [sketchVM.symbol]);

  const fetchPreview = () => {
    symbolUtils.renderPreviewHTML(symbol, {
      node: previewRef.current,
      size: 50,
    });
  };

  return (
    <>
      <Button onClick={fetchPreview}>Fetch</Button>
      <div ref={previewRef}></div>
    </>
  );
};

export default SymbolPreview;
