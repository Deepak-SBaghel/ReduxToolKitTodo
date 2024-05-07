import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

// there is only 1 store 
// this will have all the reducer 
// it will only change value in store from an reducer 

export const store = configureStore({
    reducer: todoReducer
    // pass key value pair 
    // can provide a whole object in reducer 
}); 