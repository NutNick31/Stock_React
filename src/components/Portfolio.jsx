import * as React from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



export default function Portfolio(props) {
    // const [tableRow, setTableRow] = useState([]);

    let curOrders = props.orderList;
    
    console.log(curOrders, "neworder")

    const [quantityA, setQuantityA] = useState(0)
    const [quantityB, setQuantityB] = useState(0)
    const [quantityC, setQuantityC] = useState(0)
    const [quantityD, setQuantityD] = useState(0)
    const [quantityE, setQuantityE] = useState(0)
    const [quantityF, setQuantityF] = useState(0)
    const [fiatA, setFiatA] = useState(0)
    const [fiatB, setFiatB] = useState(0)
    const [fiatC, setFiatC] = useState(0)
    const [fiatD, setFiatD] = useState(0)
    const [fiatE, setFiatE] = useState(0)
    const [fiatF, setFiatF] = useState(0)
    const overAllPortfolio = useState([])

    const handleChangeAquantity = (event) => {
      setQuantityA(event.target.value);
    }
    const handleChangeAfiat = (event) => {
      setFiatA(event.target.value);
    }
    const handleChangeBquantity = (event) => {
      setQuantityB(event.target.value);
    }
    const handleChangeBfiat = (event) => {
      setFiatB(event.target.value);
    }
    const handleChangeCquantity = (event) => {
      setQuantityC(event.target.value);
    }
    const handleChangeCfiat = (event) => {
      setFiatC(event.target.value);
    }
    const handleChangeDquantity = (event) => {
      setQuantityD(event.target.value);
    }
    const handleChangeDfiat = (event) => {
      setFiatD(event.target.value);
    }
    const handleChangeEquantity = (event) => {
      setQuantityE(event.target.value);
    }
    const handleChangeEfiat = (event) => {
      setFiatE(event.target.value);
    }
    const handleChangeFquantity = (event) => {
      setQuantityF(event.target.value);
    }
    const handleChangeFfiat = (event) => {
      setFiatF(event.target.value);
    }

    // const handleClick = () => {
    //     setOverallOrder((prevUsersList) => {
    //       return [
    //         ...overallOrder,
    //         { quantityA, quantityB, quantityC, quantityD, quantityE },
    //       ];
    //     });
    //     // Send the overallOrder i.e. One order which is placed now.
    //     console.log(overallOrder);
    //     setCurOrders(overallOrder);
    //     // To send a messgae to the backend
    //     // socket.emit("send_order", { overallOrder })
    //   };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 150 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell>Buy/Sell</TableCell> */}
            <TableCell align="right">User</TableCell>
            <TableCell align="right">Quantity</TableCell>
            {/* <TableCell align="right">Bid Price</TableCell> */}
            <TableCell align="right">Fiat</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={'A'} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
           <TableCell align="right">A</TableCell>
           <TableCell align="right">
            <TextField id="outlined-basic" label="No. of Stocks" variant="outlined" value={quantityA} onChange={handleChangeAquantity} />
           </TableCell>
           <TableCell align="right">
            <TextField id="outlined-basic" label="Fiat" variant="outlined" value={fiatA} onChange={handleChangeAfiat} />
           </TableCell>
          </TableRow>
          <TableRow key={'B'} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
           <TableCell align="right">B</TableCell>
           <TableCell align="right">
            <TextField id="outlined-basic" label="No. of Stocks" variant="outlined" value={quantityB} onChange={handleChangeBquantity} />
           </TableCell>
           <TableCell align="right">
            <TextField id="outlined-basic" label="Fiat" variant="outlined" value={fiatB} onChange={handleChangeBfiat} />
           </TableCell>
          </TableRow>
          <TableRow key={'C'} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
           <TableCell align="right">C</TableCell>
           <TableCell align="right">
            <TextField id="outlined-basic" label="No. of Stocks" variant="outlined" value={quantityC} onChange={handleChangeCquantity} />
           </TableCell>
           <TableCell align="right">
            <TextField id="outlined-basic" label="Fiat" variant="outlined" value={fiatC} onChange={handleChangeCfiat} />
           </TableCell>
          </TableRow>
          <TableRow key={'D'} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
           <TableCell align="right">D</TableCell>
           <TableCell align="right">
            <TextField id="outlined-basic" label="No. of Stocks" variant="outlined" value={quantityD} onChange={handleChangeDquantity} />
           </TableCell>
           <TableCell align="right">
            <TextField id="outlined-basic" label="Fiat" variant="outlined" value={fiatD} onChange={handleChangeDfiat} />
           </TableCell>
          </TableRow>
          <TableRow key={'E'} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
           <TableCell align="right">E</TableCell>
           <TableCell align="right">
            <TextField id="outlined-basic" label="No. of Stocks" variant="outlined" value={quantityE} onChange={handleChangeEquantity} />
           </TableCell>
           <TableCell align="right">
            <TextField id="outlined-basic" label="Fiat" variant="outlined" value={fiatE} onChange={handleChangeEfiat} />
           </TableCell>
          </TableRow>
          <TableRow key={'F'} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
           <TableCell align="right">F</TableCell>
           <TableCell align="right">
            <TextField id="outlined-basic" label="No. of Stocks" variant="outlined" value={quantityF} onChange={handleChangeFquantity} />
           </TableCell>
           <TableCell align="right">
            <TextField id="outlined-basic" label="Fiat" variant="outlined" value={fiatF} onChange={handleChangeFfiat} />
           </TableCell>
          </TableRow>
          <TableRow> <Button variant="contained">Contained</Button> </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// {curOrders.map((row) => {
//   return (
//       <TableRow key={row.type} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
//         {/* <TableCell component="th" scope="row">{row.type}</TableCell> */}
//         <TableCell align="right">{row.user}</TableCell>
//         <TableCell align="right">{row.quantity}</TableCell>
//         {/* <TableCell align="right">{row.bidPrice}</TableCell> */}
//         <TableCell align="right">{row.Fiat}</TableCell>
//       </TableRow>
//     )
// })
// }