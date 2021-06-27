import React,{useState,useContext} from 'react'
import  {GlobalContext} from '../context/GlobalState';

export const AddTransaction = () => {
    const[text,setText] = useState("");
    const {addTransaction} = useContext(GlobalContext);
    const {deleteAllTransaction} = useContext(GlobalContext);
    const{deleteTransaction} = useContext(GlobalContext);
    const[amount,setAmount] = useState(0);
    const [id,setId] = useState(1);
    const textHandler = (e) =>{
        setText(e.target.value)
    }
    const amountHandler = (e) =>{
        setAmount(e.target.value)
    }
    
    const onSubmit = (e) =>{
        e.preventDefault();
        const newTransaction = {
            id: id,
            text,
            amount: +amount
        }
        addTransaction(newTransaction);
        setId(id+1);
        setText("");
        setAmount(0)
        console.log(newTransaction)    
    }
    const clearAll =(e) =>{
        e.preventDefault();
        deleteAllTransaction();
        setId(1);
        console.log(id);
    }
    return (
        <div>
            <h3>Add New Transactions</h3>
            <form onSubmit={onSubmit} >
                <div className="form-control">
                    <label >Text</label>
                    <input type="text" value={text} onChange={textHandler} placeholder="Enter Text......"></input>
                </div>
                <div className="form-control">
                    <label>Amount
                    <br/>(-Expense / +Income)
                    </label>
                    <input type="number" value={amount} onChange={amountHandler} placeholder="Enter Amount......"></input>
                </div>
                <button className="btn">Add Transaction</button>
                <button className="btn clear-btn" onClick={clearAll}>Clear All</button>
            </form>
        </div>
    )
}
