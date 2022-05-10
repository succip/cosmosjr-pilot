const PrintTab = () => {
  const onPrintClick = () => {
    console.log("Print clicked");
  };

  return (
    <>
      <button onClick={onPrintClick}>Print Map</button>
    </>
  );
};

export default PrintTab;
