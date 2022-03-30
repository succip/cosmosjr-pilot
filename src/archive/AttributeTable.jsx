import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const tableStyle = {
  p: 0.5,
  fontSize: 12,
};

const AttributeTable = ({ attributes }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {attributes.map((row, index) => (
            <TableRow key={index}>
              <TableCell sx={tableStyle} component="th" scope="row">
                {row.Field}
              </TableCell>
              <TableCell sx={tableStyle}>{row.Value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AttributeTable;
