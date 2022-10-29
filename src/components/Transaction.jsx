import * as React from 'react';
// import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function OrderBook(props) {
    // const [tableRow, setTableRow] = useState([]);

    let curOrders = props.orderList;
    
    console.log(curOrders, "neworder")

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Buy/Sell</TableCell>
            <TableCell align="right">User</TableCell>
            <TableCell align="right">Order Type</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Bid Price</TableCell>
            <TableCell align="right">Stock Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {curOrders.map((row) => {
            return (
                <TableRow key={row.type} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">{row.type}</TableCell>
                  <TableCell align="right">{row.user1} to {row.user2}</TableCell>
                  <TableCell align="right">{row.orderType}</TableCell>
                  <TableCell align="right">{row.bidPrice}</TableCell>
                  <TableCell align="right">{row.quantity}</TableCell>
                  <TableCell align="right">{row.stockPrice}</TableCell>
                </TableRow>
              )
          })
        }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
