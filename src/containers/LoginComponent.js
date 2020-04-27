import React, {Component} from 'react'
import './../baba.css'
import * as loginStyles from '../styles/loginStyles'
import SignupComponent from './SignupComponent'

import Auth from './../utils/auth'

const auth = new Auth()
class LoginComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            userStatus: ''
        }
    }
 
    changeUserStatus = (props) =>{
        this.setState({
            userStatus: props
        })
    }


    handleLogin = (event) =>{
        event.preventDefault()
        //console.log(event.target.email.value)
    }
    render(){
        // const styles ={
        //     border: 'solid',
        //     textAlign: 'right',
        //     boxShadow: '2px 2px',
        //     align: 'right'
        // }
        if(this.state.userStatus === 'New User'){
           return(
               
               <div>
                   <SignupComponent></SignupComponent>
               </div>
           )     
        }else{
        return(      
            <div styles={loginStyles.styles}>
                {/* ---{this.props.id}---
                <br/> */}
                <b> Hello {this.props.fName}. </b>     
                Please Continue to Login
                 <br/><br/>
                 <form onSubmit={this.handleLogin}>
                <label>
                    Email:
                </label>
                <input id="email" type="text"></input>
                <br/><br/>
                <label>
                    Password:
                </label>
                <input type="password"></input>
                <br/><br/><br/>
                <button type="submit"> Login </button>
                <button onClick={
                    ()=>this.changeUserStatus ('New User')
                }> New User </button>

                <br/><br/>
                <button onClick={()=> this.props.auth.login()}> Login With Auth </button>
            </form>
            </div>
            
        )}
}
}

export default LoginComponent;