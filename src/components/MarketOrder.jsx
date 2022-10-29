import * as React from 'react';
import {useState, useEffect} from 'react';
import {styled} from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import OrderBook from './OrderBook';
import Portfolio from './Portfolio';
import './MarketOrder.css';
import Transaction from './Transaction'
// import { Socket } from 'socket.io-client';
// import io from "socket.io-client";

// const socket = io.connect("http://localhost:3001");

// margin-top:100px;
// margin:20px 20px 20px 0;
// border: 1px solid;
const Component=styled(Box)`
  width:100%;
  padding: 10px;
  height:500px;
  display: flex;
  align-items: center;
`

const StockPriceBox = styled(Box)`
    margin-top: 10px;
`

const BidField = styled(TextField)`
    width: 100%;
    margin-bottom: 10px;
`

const Market_Order = (props) => {
    
    let stockPrice = 100;

    const [type, setType] = useState('');

    const [user, setUser] = useState('');

    const [orderType, setOrderType] = useState('');

    const [overallOrder, setOverallOrder] = useState([]);

    const [bidPrice, setBidPrice] = useState(0);

    const [quantity, setQuantity] = useState(0)

    const [curOrders, setCurOrders] = useState([]);

    // const [orderBook, setOrderBook] = useState([]); => To display in the order book.

    useEffect(() => {
        
      }, [curOrders])

      // Method to recieve the message
      // useEffect(()=>{
      //    socket.on("backend-event", (data)=>{
      //        setOrderBook()
      //    })
      // ), [socket]}

    const handleChange1 = (event) => {
        setType(event.target.value);
    };
    const handleChange2 = (event) => {
        setUser(event.target.value);
    };
    const handleChange3 = (event) => {
        setOrderType(event.target.value);
    };
    const handleChange4 = (event) => {
        setBidPrice(event.target.value);
    }
    
    const handleChange5 = (event) => {
        setQuantity(event.target.value);
    }
    const handleClick = () => {
        setOverallOrder((prevUsersList) => {
          return [
            ...overallOrder,
            { type: type, user: user, orderType: orderType, bidPrice: bidPrice, stockPrice: stockPrice, quantity: quantity },
          ];
        });
        // Send the overallOrder i.e. One order which is placed now.
        console.log(overallOrder);
        setCurOrders(overallOrder);
        // To send a messgae to the backend
        // socket.emit("send_order", { overallOrder })
      };


  return (
    <Component>
        <div className='BuySell' >
            <div>
                <div className="Text" >Place Your Order</div>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Buy/Sell</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            label="Buy/Sell"
                            onChange={handleChange1}
                        >
                        <MenuItem value={'Buy'}>Buy</MenuItem>
                        <MenuItem value={'Sell'}>Sell</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">User</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={user}
                            label="Age"
                            onChange={handleChange2}
                        >
                        <MenuItem value={'A'}>A</MenuItem>
                        <MenuItem value={'B'}>B</MenuItem>
                        <MenuItem value={'C'}>C</MenuItem>
                        <MenuItem value={'D'}>D</MenuItem>
                        <MenuItem value={'E'}>E</MenuItem>
                        <MenuItem value={'F'}>F</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">OrderType</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={orderType}
                            label="Age"
                            onChange={handleChange3}
                        >
                        <MenuItem value={'Market Order'}>Market Order</MenuItem>
                        <MenuItem value={'Limit Order'}>Limit Order</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                Stock Price : <StockPriceBox>{stockPrice}</StockPriceBox>

                <BidField id="standard-basic" label="Quantity" variant="standard" value={bidPrice} onChange={handleChange4} />
                <BidField id="standard-basic" label="Bid-Price" variant="standard" value={quantity} onChange={handleChange5} />

                <Button variant="contained" onClick={handleClick} >Place Order</Button>
            </div>

            <div className='OrderPort' >
                <div className='Text' >OrderBook</div>
                <div className="OrderBook">
                    <OrderBook orderList = {curOrders}/>
                </div>
                <div className="OrderBook">
                    <div className='Text' >Portfolio</div>
                    <Portfolio orderList={curOrders} />
                </div>
            </div>
        </div>

        <div className='OrderBook' >
            <div className='Text' >Transaction History</div>
            <Transaction className="OrderBook" orderList={curOrders} />
        </div>

    </Component>
  );
}

export default Market_Order