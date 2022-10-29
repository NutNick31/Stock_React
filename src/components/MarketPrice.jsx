import React from 'react';
import './MarketPrice.css'

const MarketPrice = () => {
    const marketPrice = 100
    return (
        <div className='marketPrice'>The Current Market Price is : {marketPrice}. </div>
    )
}

export default MarketPrice