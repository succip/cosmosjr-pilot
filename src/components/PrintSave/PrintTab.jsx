import { useState } from "react";
import Box from "@mui/material/Box";
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

  const onPrintClick = () => {
    const printTemplate = { layout, format, titleText, authorText };
    exportMap(printTemplate);
  };

  return (
    <>
      <Box>
        <FormGroup>
          <PrintTemplateSelect setLayout={setLayout} />
          <PrintFormatSelect setFormat={setFormat} />
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
