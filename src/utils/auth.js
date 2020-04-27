import auth0 from 'auth0-js'
import history from './history'

export default class Auth{
    //metadata of specific project from auth0.com
    //set up needed for auth0 to handle the login/signup
    auth0 = new auth0.WebAuth({
        domain: 'keentech.auth0.com',
        clientID: 'YmswY3EgKeTTTmpv6n7UjS78iNK9zux2',
        redirectUri: 'http://localhost:3000/callback',
        responseType: 'token id_token',
        scope: 'openid profile email'
    })

    userProfile = {}
    
    login = () =>{
        //console.log('1...inside auth login')
        //the Login button calls the method which authorized from auth0
        this.auth0.authorize()
    }

    handleAuth = () =>{
        //the auth0 returns authResult in url with access_token, id_token, 
        //default expires time of 7200 ms. This method checks the authResult
        //and set the expire time to 7200ms*1000 (2hrs) from current date in the
        //localStorage object
        //console.log ('inside handleAuth')

        this.auth0.parseHash((err, authResult) =>{
            if(authResult){
                localStorage.setItem('access_token', authResult.accessToken)
                localStorage.setItem('id_token', authResult.id_token)
                //console.log ('EX TIME org' + authResult.expiresIn)
                //console.log(' Current Date' + new Date().getTime())
                let expiresAt = JSON.stringify((authResult.expiresIn * 1000 + new Date().getTime()))
                localStorage.setItem('expiresAt', expiresAt)
                //console.log ('AC Token' + localStorage.getItem('access_token'))
                //console.log ('EX TIME' + localStorage.getItem('expiresAt'))
                this.getProfile()
                setTimeout(() =>{
                    history.replace('/authcheck')
                },2000)         //User redirects to authCheck everytime after login attempt is made.
                
            }else{
                //console.log(err)
            }
        })
    }

    getAccessToken = () =>{
        if(localStorage.getItem('access_token')){
            const accessToken = localStorage.getItem('access_token')
            return accessToken
        }else{
            return null
        }
    }

    //This method get the user profile data after login
    getProfile = () =>{
        let accessToken = this.getAccessToken()
        if(accessToken){
            this.auth0.client.userInfo(accessToken, (err, profile) =>{
                if(profile){
                    this.userProfile = {profile}
                }
            })
        }
    }
    logout = () =>{
        //console.log('inside logout')
        //logout button click calls this method which removes values
        //from localStorage and expiresAt is removed, user get logged out
        localStorage.removeItem('access_token')
        localStorage.removeItem('id_token')
        localStorage.removeItem('expiresAt')
        setTimeout(() =>{
            history.replace('/authcheck')
        },200) 
    }

    isAuthenticated = () =>{
        let expiresAt = JSON.parse(localStorage.getItem('expiresAt'))
        //console.log ('expiresAt' + expiresAt)
        //console.log ('Current Time' + new Date().getTime())
        //console.log('DIFF = ' + expiresAt - new Date().getTime() )
        return new Date().getTime() < expiresAt
    }
}