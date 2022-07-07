const initState=
    [
        {id: 1, name: 'Learn Yoga', completed:false, priority:'Medium'},
        {id: 2, name: 'Learn Redux', completed:false, priority:'High' },
        {id: 3, name: 'Learn Cox',  completed:false, priority:'Low',},
        {id: 4, name: 'Learn JS',  completed:false, priority:'Medium'},


    ]


const TodoListReducer = (state= initState, action) => {
    
    switch (action.type){
        case 'todoList/addTodo' :
            return [...state, action.payload]     
        default: return state;
        
    }

}
export default TodoListReducer;