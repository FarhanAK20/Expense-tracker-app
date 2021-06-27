import React,{createContext,useReducer} from 'react'
import AppReducer from './AppReducer';
//initial state

const initialState = {
    transactions :[]
}
 //create context
 export const GlobalContext = createContext(initialState);

 //create provider

 export const GlobalProvider = ({children}) =>{
     const [state,dispatch] = useReducer(AppReducer,initialState);

     function deleteTransaction(id) {
         dispatch({
             type: 'DELETE_TRANSACTION',
             payload: id
         });
     }
     function addTransaction(transaction) {
         dispatch({
             type: 'ADD_TRANSACTION',
             payload: transaction
         });
     }
     function deleteAllTransaction(transaction){
         dispatch({
             type: 'DELETE_ALL',
             payload: transaction
         });
     }

     return (<GlobalContext.Provider value ={{
         transactions: state.transactions,
         deleteTransaction,addTransaction,deleteAllTransaction
     }}>
         {children}
     </GlobalContext.Provider>)
 }
