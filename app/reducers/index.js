import { combineReducers } from 'redux'
import people from './people'
import auth from './auth'
import start from './start-reducer'

const rootReducer = combineReducers({
    people,
    auth,
    start
})

export default rootReducer