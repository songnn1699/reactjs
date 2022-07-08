import { createSelector } from "@reduxjs/toolkit";



export const todoListSelector =(state) => state.todoList;
export const searchTextSelector =(state) => state.filter.search;
export const filterStatusSelector =(state) => state.filter.status;
export const filterPrioritySelector =(state) => state.filter.priority;


export const todosRemainingSelector = createSelector(
    todoListSelector, 
    filterStatusSelector,
    searchTextSelector,
    filterPrioritySelector,
    (todoList,status,searchText, priorities) =>{
        
        return todoList.filter((todo) =>{
            if (status === 'All'){
                return priorities.length ? todo.name.includes(searchText) && priorities.includes(todo.priority): todo.name.includes(searchText);
            }

            return(
                todo.name.includes(searchText) &&
                (status === 'completed' ? todo.completed: !todo.completed) && (priorities.length ? priorities.includes(todo.priority) : true)
            );


        });   
    }
);
