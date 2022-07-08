
export const addTodo=(data)=>{
    return{
        type: 'todoList/addTodo',
        payload: data
    }

}

export const clickTodo=(todoid)=>{
    return{
        type: 'todoList/clickTodo',
        payload: todoid
    }
}




export const searchFilter =(text) =>{
    return{
        type: 'filter/searchFilter',
        payload: text
    }
}

export const statusFilter =(status) =>{
    return {
        type: 'filter/statusFilter',
        payload: status
    }
}

export const priorityFilter =(priority) =>{
    return{
        type: 'filter/priorityFilter',
        payload: priority
    }
}