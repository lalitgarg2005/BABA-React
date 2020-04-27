import React, {Component} from 'react'
import * as ACTION_TYPES from '../actions/action_types'
const authState = {
    is_authenticated: false,
    profile: null
}
const AuthReducer = (state=authState, action) =>{
    switch(action.type){
        case ACTION_TYPES.LOGIN_SUCCESS:
            //console.log('login success auth_reducer')
            return{
                ...state,
                is_authenticated: true
            }
        case ACTION_TYPES.LOGIN_FAILURE:
            return{
                ...state,
                is_authenticated: false
            }
        case ACTION_TYPES.ADD_PROFILE:
            return{
                ...state,
                profile: action.payload
            }
        case ACTION_TYPES.REMOVE_PROFILE:
            return{
                ...state,
                profile: null
            }
        default: 
            return state
    }
}
export default AuthReducer;