import { combineReducers } from 'redux'
import MessagesReducer from './message'

export default combineReducers({
    messages: MessagesReducer
})
