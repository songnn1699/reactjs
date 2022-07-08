// const initState=
//     [
//         {id: 1, name: 'Learn Yoga', completed:true, priority:'Medium'},
//         {id: 2, name: 'Learn Redux', completed:false, priority:'High' },
//         {id: 3, name: 'Learn Cox',  completed:false, priority:'Low',},
//         {id: 4, name: 'Learn JS',  completed:false, priority:'Medium'},


//     ]


// const TodoListReducer = (state= initState, action) => {
    
//     switch (action.type){
//         case 'todoList/addTodo' :
//             return [...state, action.payload]     


//         case 'todoList/clickTodo':
//             return state.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed}: todo);
//         default: return state;
        
//     }

// }
import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: "todoList",
    initialState: [
        {id: 1, name: 'Learn Yoga', completed:true, priority:'Medium'},
        {id: 2, name: 'Learn Redux', completed:false, priority:'High' },
        {id: 3, name: 'Learn Cox',  completed:false, priority:'Low',},
        {id: 4, name: 'Learn JS',  completed:false, priority:'Medium'},
    ],
    reducers:{
        addTodo: (state,action) =>{
            state.push(action.payload)
        },
        clickTodo: (state,action) =>{
            const currentTodo= state.find(todo => todo.id === action.payload)
            currentTodo.completed= !currentTodo.completed;
        }
    }
})


