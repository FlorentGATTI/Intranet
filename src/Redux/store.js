import {createStore, applyMiddleware, combineReducers} from 'redux';
import collabReducer from './features/collabReducer'
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
    collabReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;