import React ,{useContext}from 'react'
import  {GlobalContext} from '../context/GlobalState';
import {FaRupeeSign} from 'react-icons/fa'
import { numberWithCommas } from '../utils/numberWithCommas';

export const Transaction = ({transaction}) => {
    const{deleteTransaction} = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' :'+'
    return (
        <li className={transaction.amount<0 ? 'minus' : 'plus' }>{transaction.id}. {transaction.text}<span>{sign}<FaRupeeSign fontSize="12px"/>{numberWithCommas(Math.abs(transaction.amount))}</span>
              <button className="delete-btn" onClick ={()=>{
                  deleteTransaction(transaction.id)
              }}>Delete</button>
         </li>
    )
}
