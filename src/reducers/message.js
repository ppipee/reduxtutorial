import ActionsName from '../action.js'

const initialState = {
    messages: [],
}

const MessagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionsName.SAVE:
            return {
                ...state,
                messages: action.new_messages
            }
        default:
            return state
    }
}
export default MessagesReducer