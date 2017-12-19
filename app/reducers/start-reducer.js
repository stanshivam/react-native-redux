const defaultState = {
    name: '',
    phone: ''
};
 
export default function reducer(state = defaultState, action) {
    console.log('in start-reducer reducer');
    switch (action.type) {
        case 'DOSUBMIT': 
            return Object.assign({}, state, { 
                name: action.name,
                phone: action.phone
            });
        
        default:
            return state;
    }
}