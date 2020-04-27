import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

class HeaderComponent extends Component{
    render(){
        return(
            <div>
                {/* <h3 style={{color:"red"}}>{this.props.title}</h3> */}
                <Link to='/'> Home </Link> 
                <div align="right" style={{padding:"20px"}}>
                <Link to='/login' style={{padding:"20px"}}> Login </Link> 
                <Link to='/signup' style={{padding:"20px"}}> Signup </Link>
                <Link to='/hooksContainer' style={{padding:"20px"}}> hooksContainer </Link>

                {/* <Link to='/privateroute'style={{padding:"20px"}}> Privateroute </Link> */}
                <Link to='/profile'style={{padding:"20px"}}> Profile </Link>
                <button onClick={() => console.log(this.props.is_authenticated)}> GetState</button>
                {!this.props.is_authenticated
                ? <button onClick={() => this.props.auth.login()}> Login </button>
                : <button onClick={() => this.props.auth.logout()}> Logout</button>
                }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
      is_authenticated: state.auth_reducer.is_authenticated,
      user_profile: state.auth_reducer.profile
    }
}

export default connect(mapStateToProps)(HeaderComponent);
