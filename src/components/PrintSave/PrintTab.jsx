import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import LoadingIcon from "../Common/LoadingIcon";
import PrintTemplateSelect from "./PrintTemplateSelect";
import PrintFormatSelect from "./PrintFormatSelect";
import PrintOutbox from "./PrintOutbox";
import { exportMap } from "../../js/Print";

const outboxMax = 5;

const PrintTab = () => {
  const [layout, setLayout] = useState("8.5x11 Landscape");
  const [format, setFormat] = useState("pdf");
  const [titleText, setTitleText] = useState("");
  const [authorText, setAuthorText] = useState("");
  const [sizeWarning, setSizeWarning] = useState(false);
  const [printDisabled, setPrintDisabled] = useState(false);
  const [printedMaps, setPrintedMaps] = useState([]);

  const onPrintClick = async () => {
    setPrintDisabled(true);
    const printTemplate = { layout, format, titleText, authorText };
    const newPrintedMap = await exportMap(printTemplate);
    setPrintedMaps([...printedMaps, newPrintedMap]);
    setPrintDisabled(false);
  };

  useEffect(() => {
    setSizeWarning(layout.includes("24x36"));
  }, [layout]);

  useEffect(() => {
    if (printedMaps.length > outboxMax) setPrintedMaps(printedMaps.slice(1, outboxMax + 1));
  }, [printedMaps]);

  return (
    <>
      <Box my={2}>
        <FormGroup>
          <Box mb={2}>
            <PrintTemplateSelect setLayout={setLayout} />
            {sizeWarning && (
              <Typography sx={{ color: "warning.main" }}>
                Please note, maps of this size (24x36) take significantly longer to process than
                smaller sized layouts.
              </Typography>
            )}
            <PrintFormatSelect setFormat={setFormat} />
          </Box>

          <TextField
            label="Map Title"
            value={titleText}
            onChange={(e) => setTitleText(e.target.value)}
          />
          <TextField
            label="Map Description"
            multiline={true}
            rows={3}
            value={authorText}
            onChange={(e) => setAuthorText(e.target.value)}
          />

          <Button disabled={printDisabled} variant="contained" onClick={onPrintClick}>
            {printDisabled ? <LoadingIcon /> : "Print"}
          </Button>
          {printedMaps.length > 0 && <PrintOutbox printedMaps={printedMaps} />}
        </FormGroup>
      </Box>
    </>
  );
};

export default PrintTab;
