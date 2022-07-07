const initState={
    
        search:'',
        status: 'all',
        priority: [],

    
}


const FilterReducer = (state = initState, action) => {
    
    switch (action.type){

        case 'filter/searchFilter':
            return{ ...state,
                    search: action.payload   
            }
        
        default: return state;
        
    }

}
export default FilterReducer;