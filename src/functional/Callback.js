import React from 'react'

const Callback = props =>{
    //The component defined in auth0 page as a immediate page
    //where user is redirect to after the auth0 hosted page.
    //It returns an empty <div></div>. In production, it may be
    //a loading screen
    return(
        <div>
            Callback
            {console.log(props)}
        </div>
    )
}

export default Callback;