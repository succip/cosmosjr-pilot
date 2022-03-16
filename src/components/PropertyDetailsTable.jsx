import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const sampleAddress = [
  {
    Field: "ADDRESS",
    Value: "12728 Ross Pl V3V 6E1",
  },
  {
    Field: "FOLIO",
    Value: "6314-78102-4",
  },
  {
    Field: "OWNER TYPE",
    Value: "Private",
  },
];

const PropertyDetailsTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {sampleAddress.map((row) => (
            <TableRow key={row.Field}>
              <TableCell component="th" scope="row">
                {row.Field}
              </TableCell>
              <TableCell>{row.Value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PropertyDetailsTable;
