import FilterReducer from "../components/Filters/filterReducer";
import TodoListReducer from "../components/TodoList/todoReducer";
import { combineReducers } from "redux";


// const rootReducer = (state={}, action) => {
//     return {
//         filter: FilterReducer(state.filter, action),
//         todoList: TodoListReducer(state.todoList, action)
//     }

// }
const rootReducer= combineReducers({
    filter:FilterReducer,
    todoList:TodoListReducer,
});



export default rootReducer;