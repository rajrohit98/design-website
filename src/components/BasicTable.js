import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(country, turnover, salesmargin, salesmargin2) {
  return { country, turnover, salesmargin, salesmargin2};
}

const rows = [
  createData("Canada", "$2,445,662", "36%", "Placeholder"), 
  createData('UAE', '$2,445,662', '36%', 'Placeholder'),
  createData('Canada', '$2,445,662', '36%', 'Placeholder'),
  createData('Canada', '$2,445,662', '36%', 'Placeholder'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell align="right">Turnover</TableCell>
            <TableCell align="right">Sales Margin</TableCell>
            <TableCell align="right">Sales Margin 2</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.turnover}</TableCell>
              <TableCell align="right">{row.salesmargin}</TableCell>
              <TableCell align="right">{row.salesmargin2}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
