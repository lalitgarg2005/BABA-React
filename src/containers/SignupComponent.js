import React, {Component} from 'react'
import LoginComponent from './LoginComponent'

import * as ACTIONS from './../store/actions/actions'

import { connect } from 'react-redux'
class SignupComponent extends Component{

    constructor(props){
        super(props)
        this.state ={
            userStatus: 'New User',
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    }
    SignUp = (event) =>{
        event.preventDefault()
        this.setState({
            firstName: event.target.fName.value,
            lastName: event.target.lName.value,
            email: event.target.email.value,
            password: event.target.password.value,
            userStatus: 'Existing User'
        })
    }
    changeUserStatus = (props) =>{
        this.setState({
            userStatus: props
        })
    }
    render() {
        if(this.state.userStatus === 'Existing User'){
            return(
                <div>
                    <LoginComponent fName={this.state.firstName}></LoginComponent>
                </div>
            )
        }else{
        return (
            <div>
            <form onSubmit={this.SignUp}>
                <label>First Name: </label>
                <input id="fName" type="text"></input>
                <br/><br/>
                <label>Last Name: </label>
                <input id="lName" type="text"></input>
                <br/><br/>
                <label>Email: </label>
                <input id="email" type="text"></input>
                <br/><br/>
                <label>Password: </label>
                <input id="password" type="text"></input>
                <br/><br/>
                <label>Confirm Password: </label>
                <input type="text"></input>
                <br/><br/>
                <button type="Submit">Signup</button>
                {/* <button onClick={() =>
                    this.changeUserStatus('Existing User')
                }>Existing User</button> */}
                <button onClick={() =>
                    this.props.updateUser('Existing User')
                }>Existing User</button>
                <br/>
                 {/* {this.props.userState} */}
            </form>
            </div>
        )}
    }

}
function mapStateToProps(state){
    return{
        userState: state.user_reducer.userState
    }
}

function mapDispatchToProps(dispatch){
    return{
        action1: () => dispatch(ACTIONS.SUCCESS),
        updateUser: (text) => dispatch(ACTIONS.user_input(text))
    }
}
    export default connect(mapStateToProps, mapDispatchToProps )(SignupComponent);