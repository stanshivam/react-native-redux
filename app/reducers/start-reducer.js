const defaultState = {
    hasConfig: false,
    name: '',
    phone: '',
    email: '',
    selectedCrops: [],
    crops: [],
    isFetching: false,
    error: false
};
 
export default function startReducer(state = defaultState, action) {
    // console.log('in start-reducer reducer');
    switch (action.type) {
        case 'DOSUBMIT': 
            return Object.assign({}, state, { 
                hasConfig: true,
                name: action.name,
                phone: action.phone
            });
        case 'SELECTCROP': 
            return Object.assign({}, state, { 
                hasConfig: true,
                selectedCrops: [...selectedCrops, action.crop]
            });
        case 'FETCHING_CROPS':
            return {
                ...state,
                crops: [],
                isFetching: true
            }   
        case 'FETCHING_CROPS_SUCCESS':
            return {
                ...state,
                isFetching: false,
                crops: action.data
            }
        case 'FETCHING_CROPS_FAILURE':
            return {
                ...state,
                isFetching: false,
                error: true
            }
    
        default:
            return state;
    }
}

