import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import PrintTemplateSelect from "./PrintTemplateSelect";
import PrintFormatSelect from "./PrintFormatSelect";
import { exportMap } from "../../js/Print";

const PrintTab = () => {
  const [layout, setLayout] = useState("8.5x11 Landscape");
  const [format, setFormat] = useState("pdf");
  const [titleText, setTitleText] = useState("");
  const [authorText, setAuthorText] = useState("");
  const [sizeWarning, setSizeWarning] = useState(false);

  const onPrintClick = () => {
    const printTemplate = { layout, format, titleText, authorText };
    exportMap(printTemplate);
  };

  useEffect(() => {
    setSizeWarning(layout.includes("24x36"));
  }, [layout]);

  return (
    <>
      <Box my={2}>
        <FormGroup>
          <Box mb={2}>
            <PrintTemplateSelect setLayout={setLayout} />
            {sizeWarning && (
              <Typography>
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

          <Button variant="contained" onClick={onPrintClick}>
            Print
          </Button>
        </FormGroup>
      </Box>
    </>
  );
};

export default PrintTab;
