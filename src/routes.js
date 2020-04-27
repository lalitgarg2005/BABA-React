import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Router, Route, Switch, Redirect} from 'react-router'
import LoginComponent from './containers/LoginComponent'
import SignupComponent from './containers/SignupComponent'
import HeaderComponent from './containers/HeaderComponent'
import FooterComponent from './functional/FooterComponent'
import Callback from './functional/Callback';
import UnauthRedirect from './functional/unauthredirect'
import MainComponent from './containers/MainComponent'

import HooksContainer1 from './hooks/HooksContainer1'
import history from './utils/history'
import AuthCheck from './utils/authCheck'
import Profile from './containers/Profile'

import Auth from './utils/auth'
import * as ACTIONS from './store/actions/actions'
import ProtectedRoute from './functional/protectedroute'

const auth = new Auth()

const handleAuthentication = props =>{
    if(props.location.hash){
      //React router has given us default props.
      //Url is one of those properties.
      // location is one property which hash has the values
      //as auth_token, id_token, expiresAt - which we are extracting
      //in auth.handleAuth() 
      auth.handleAuth()
    }
}

const PrivateRoute = ({component: Component, auth}) => (
  <div>
    {/* {console.log ('PR ' + auth.isAuthenticated())} */}
  <Route render = { props => 
    auth.isAuthenticated() === true
    ? <Component auth={auth} {...props}/>
    : <Redirect to={{pathname: '/redirect'}}/>
  } />
    </div>

)

class Routes extends Component{
  componentDidMount(){
    if(auth.isAuthenticated()){
        this.props.login_success()
        auth.getProfile()
        setTimeout(()=> {
          this.props.add_profile(auth.userProfile)},200)
    }else{
        this.props.login_failure()
        this.props.remove_profile()
    }
}
    render(){
        return(
            <div>               
          <Router history={history} >
          <div>
            <HeaderComponent auth={auth}/>
            <Switch>
              <Route exact path="/" component={MainComponent} />
              {/* <Route path="/login" render={(props) => <LoginComponent {...props}/>} /> */}
              <Route path="/login" render={() => <LoginComponent auth={auth}/>} />
              <Route path="/signup" component={SignupComponent}/>
              <Route path='/callback' render={(props) => { 
                  handleAuthentication(props); 
                    return <Callback/>}
                    } />
                <Route path='/authcheck' render={() =><AuthCheck auth={auth}/>}/>
                <Route path='/redirect' component={UnauthRedirect}/>
                <Route path='/hooksContainer' component={HooksContainer1}/>

                <PrivateRoute path='/privateroute' auth={auth} component={ProtectedRoute}/>
                <PrivateRoute path='/profile' auth={auth} component={Profile}/>

              </Switch>
            </div>
          </Router> 
          
          </div> 
        )
    }
}
function mapDispatchToProps(dispatch){
  return{
      login_success: () => dispatch(
          ACTIONS.login_success()
      ),
      login_failure: () => dispatch(
          ACTIONS.login_failure()
      ),
      add_profile: (profile) =>dispatch(
          ACTIONS.add_profile(profile)
      ),
      remove_profile: () => dispatch(
          ACTIONS.remove_profile()
      )
  }
}
export default connect(null,mapDispatchToProps)(Routes);
