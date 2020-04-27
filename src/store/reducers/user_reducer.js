import * as ACTION_TYPES from '../actions/action_types'

const userState = {
    userState: ''
}
const userReducer = (state = userState, action) => {
    switch(action.type){
        case ACTION_TYPES.USER_INPUT:
            return{
                ...state,
                userState: action.payload
            }
            default:
                return state
    }
}
export default userReducer;