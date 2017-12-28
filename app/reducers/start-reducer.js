const defaultState = {
    hasConfig: false,
    name: '',
    phone: '',
    email: '',
    selectedCrops: []
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
        
        default:
            return state;
    }
}