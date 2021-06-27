import React ,{useContext}from 'react'
import  {GlobalContext} from '../context/GlobalState';
import {FaRupeeSign} from 'react-icons/fa'
import {numberWithCommas} from '../utils/numberWithCommas'
export const IncomeExpenses = () => {
    const {transactions} = useContext(GlobalContext);
    const amounts  = transactions.map(transaction => transaction.amount);
    const income = amounts.filter(item => item>0).reduce((acc,item) =>(acc+=item),0).toFixed(2);
    const expense = (amounts.filter(item => item<0).reduce((acc,item) =>(acc+=item),0)*-1).toFixed(2);
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus"><FaRupeeSign fontSize="15px"/>{numberWithCommas(income)}</p>
            </div>     
            <div>
                <h4>Expense</h4>
                <p className="money minus"><FaRupeeSign fontSize="15px"/>{numberWithCommas(expense)}</p>
            </div>     
        </div>
    )
}
