import React, {useContext} from 'react'
import  {GlobalContext} from '../context/GlobalState';
import {FaRupeeSign} from 'react-icons/fa'
import {numberWithCommas} from '../utils/numberWithCommas'

export const Balance = () => {
    const {transactions} = useContext(GlobalContext);
    const amounts  = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc,item) =>(acc+=item),0).toFixed(2);

    return (
        <div>
            <h4>Your Balance</h4>
            <h1><FaRupeeSign/>{numberWithCommas(total)}</h1>
        </div>
    )
}
