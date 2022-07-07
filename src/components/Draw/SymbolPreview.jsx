import { useRef } from "react";

const SymbolPreview = ({ symbol }) => {
  const previewRef = useRef(null);

  return (
    <>
      <div ref={previewRef}></div>
    </>
  );
};

export default SymbolPreview;
