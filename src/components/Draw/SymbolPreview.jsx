import { useRef } from "react";

const SymbolPreview = ({ symbol }) => {
  // console.log("previewWidth:", symbol.outline.width);
  const previewRef = useRef(null);

  return <>{symbol && <div ref={previewRef}>outline width: {symbol.outline.width}</div>}</>;
};

export default SymbolPreview;
