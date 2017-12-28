import { combineReducers } from 'redux'
import people from './people'
import auth from './auth'
import start from './start-reducer'

import AppNavigation from '../navigation/AppNavigation'

const navReducer = (state, action) => {
    const newState = AppNavigation.router.getStateForAction(action, state)
    return newState || state
}

const rootReducer = combineReducers({
    people,
    auth,
    start,
    nav: navReducer
})

export default rootReducer