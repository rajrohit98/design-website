import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography'; // Import Typography for the header
import * as React from 'react';

function createData(country, turnover, salesmargin, salesmargin2) {
  return { country, turnover, salesmargin, salesmargin2 };
}

const rows = [
  createData("Canada", "$2,445,662", "36%", "Placeholder"),
  createData('UAE', '$2,445,662', '36%', 'Placeholder'),
  createData('Canada', '$2,445,662', '36%', 'Placeholder'),
  createData('Canada', '$2,445,662', '36%', 'Placeholder'),
  createData("Canada", "$2,445,662", "36%", "Placeholder"),
  createData('UAE', '$2,445,662', '36%', 'Placeholder'),
  createData('Canada', '$2,445,662', '36%', 'Placeholder'),
  createData('Canada', '$2,445,662', '36%', 'Placeholder'),
  
];

export default function BasicTable() {
  return (
    <Paper sx={{ width: '680px', padding: '16px' }}> {/* Paper component with padding */}
      <Typography variant="body1" fontWeight={'bold'} sx={{
        mb:'0.5rem'
      }}>
        Table Card
      </Typography>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Country</TableCell> {/* Make header bold */}
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>Turnover</TableCell> {/* Make header bold */}
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>Sales Margin</TableCell> {/* Make header bold */}
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>Sales Margin 2</TableCell> {/* Make header bold */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.country}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.country}
                </TableCell>
                <TableCell align="right">{row.turnover}</TableCell>
                <TableCell align="right">{row.salesmargin}</TableCell>
                <TableCell align="right">{row.salesmargin2}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
