import { createSlice,nanoid } from "@reduxjs/toolkit";

// slice is where u make the reducer
// slce require 3 things 
// name , initial state , reducer
// reducer will have all the function which will modify the state
// reucer have key and function  pair
const initialState = {
    todos:[{id:1, text:"hellow world "}]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState, 
    reducers:{
        addTodo:(state,action)=>{
            // state : it tells about the current state of the initial value
            // action : these are the variable passed to do the function
            const todo={
                id:nanoid(),
                // payload is an object and u can extract values from it 
                // text:action.payload.text but here payload is directly a text 
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todos)=>{
                return todos.id !== action.payload;
            })
        }

    },
})


// INDIVIDUAL FUNCTIONALITY 
export const {addTodo,removeTodo} = todoSlice.actions
// mention all functionality here , bcs they might want to  call  individualy function  
// this will change the state 


// WHOLE THING (WILL BE ADDED IN STORE )
// THIS WILL BE EXPORTED BY DEFAULT 
export default todoSlice.reducer
// to provide store awarness about the reducer
// and only from these reducer the state will change 