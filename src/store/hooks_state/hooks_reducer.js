import * as ACTION_TYPES from '../actions/action_types'

export const initialState = {
    stateProp1: false
}

export const HooksReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTION_TYPES.SUCCESS:
            return{
                ...state,
                stateProp1 : true
            }
            case ACTION_TYPES.FAILURE:
                return{
                    ...state,
                    stateProp1:false
                }
                default:
                    return{
                    stateProp1: true
                }
    }
}
