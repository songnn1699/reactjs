// import { composeWithDevTools } from 'redux-devtools-extension';
// import { createStore} from 'redux'
// import rootReducer from './reducers';


// const devToolsEnhancer = composeWithDevTools();

// const store = createStore(rootReducer, devToolsEnhancer);
// export default store;


import { configureStore} from '@reduxjs/toolkit'
import FilterReducer from '../components/Filters/filterReducer'
import TodoListReducer from '../components/TodoList/todoReducer'
const store = configureStore({
    reducer:{
    filter: FilterReducer.reducer,
    todoList: TodoListReducer.reducer,
    },
});

export default store;