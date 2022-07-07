import { createSelector } from "reselect";



export const todoListSelector =(state) => state.todoList;
export const searchTextSelector =(state) => state.filter.search;


export const todosRemainingSelector = createSelector(
    todoListSelector, 
    searchTextSelector,
    (todoList, searchText) =>{
        return todoList.filter((todo) =>{
            return todo.name.includes(searchText);
        });   
    }
);
