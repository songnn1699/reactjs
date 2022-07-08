// const initState={
    
//         search:'',
//         status: '',
//         priority: [],

    
// }


// const FilterReducer = (state = initState, action) => {
    
//     switch (action.type){

//         case 'filter/searchFilter':
//             return{ ...state,
//                     search: action.payload   
//             }
        
//         case 'filter/statusFilter':
//             return{
//                 ...state,
//                 status: action.payload
//             }
//         case 'filter/priorityFilter':
//             return{
//                 ...state,
//                 priority: action.payload
//             }


//         default: return state;

        
        
//     }

// }
// export default FilterReducer;

import { createSlice } from "@reduxjs/toolkit";


const FilterReducer= createSlice({
    name: "filter",
    initialState:{
        search:'',
        status:'All',
        priority:[],
    },
    reducers:{
        searchFilter: (state, action) =>{
            state.search =action.payload;
        },
        statusFilter:(state, action) =>{
            state.status=action.payload;
        },
        priorityFilter:(state, action) =>{
            state.priority=action.payload;
        }


    }
})

export default FilterReducer;