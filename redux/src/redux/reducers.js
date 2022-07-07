import FilterReducer from "../components/Filters/filterReducer";
import TodoListReducer from "../components/TodoList/todoReducer";



const rootReducer = (state={}, action) => {
    return {
        filter: FilterReducer(state.filter, action),
        todoList: TodoListReducer(state.todoList, action)
    }

}
export default rootReducer;