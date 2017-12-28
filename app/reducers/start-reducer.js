const defaultState = {
    hasConfig: false,
    name: '',
    phone: ''
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
        
        default:
            return state;
    }
}