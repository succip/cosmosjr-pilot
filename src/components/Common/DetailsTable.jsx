import React from "react";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const tableStyle = {
  p: 0.5,
  fontSize: 12,
};

const DetailsTable = ({ headings, data }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        {headings && (
          <TableHead>
            <TableRow>
              {headings.map((heading, index) => (
                <TableCell sx={tableStyle} key={index}>
                  {heading}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        )}
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              {Object.keys(row).map((key, index) => {
                return (
                  <TableCell sx={tableStyle} key={index}>
                    {row[key]}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DetailsTable;
