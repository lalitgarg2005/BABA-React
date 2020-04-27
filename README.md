REF: https://www.udemy.com/course/modern-react/learn/lecture/13614440#overview

1. 
    SPA - Compare the Virtual DOM to the actual html DOM and update the only one's which has been changed. Or you can say, React looks for the changes in the Virtual DOM and then changes the real DOM. That's why React is referred as SPA (Single Page Application). It's literally only a single html file. When you first visit the site, the server sends you literally all the code of for the website and you stay in single html page no matter what you are seeing rendered to the screen. 
   
    This can be tested by going to chrome-devtools -Elements -
    All the react code contains within <div id="root"></div> - 2 divs
    all the lines and components code resides within this 2 div.
    All codes sent to browser in one html file.
    Lazy Loading - help to load time for larger apps.

    The contents of <head> and <html> element never changed. So the DOM elements always remain the same.

    Only the component codes within <div> changes which is displayed to the user.

    JSX - React.createElement being called over and over again. 
    It is basically html code inside js. 
2. Babel/WebPack - ES6/ES5 converted to basic js.
3. Traditional vs SPA 
4. variable scope - 
    > class - can be accessed as with this.
    > function - as it will not be changed. can be const.
5. React.createElement - uses Virtual DOM to create html DOM. 
6. props - read only. one way data binding.
7. Components
    - Functional Components - return JSX directly. not aware of state.
    - Class Components aka Containers - use render. Components those are aware of state are called containers. it means, only class components are aware of state.
8. state - used for temporary data - like user is logged in or not, dialog is open or closed.
    non temporary data - can be stored/retrieved from sql/noSql. Blog posts, comments, user profile data
    In React, State is a JS object, a key-value pair.
    can be accessible within the component which declared it. Not by parent component.
    read and write.
    can be changed using setState() method.
    calling setState() would cause the component to re-render.
    state must be initialized in constructor.

    --state - should not be changed directly. Use setState()
9. Constructor - 
10. LifeCycle of Methods
constructor -> Render() -> ComponentDidMount() -> async operations (db calls) -> ComponentWillUnMount
    ComponentDidMount() - Virtual DOM component is successfully mounted the real DOM. should use to show the default items that should get done automatically when the page loaded.
    ComponentWillUnMount()
11. arrow function vs regular function - need to bind explicitly in regular.
    this keyword referencing. 
---------------------------------------------------------------------------------
Redux - state management
1. update the state and persist to all the components
    there is one source of truth.
    state is read-only.
    changes are made with Pure Functions.
2. Reducers - case stmt - 
    take previous state and return new state or which means it can change the redux state.
    Must be pure or can't be async. 
3. Actions, Action Creator - 
4. React-Redux - the library hook up the react and redux.
5. Spread Function
6. How Redux store are available globally for all the component. Need to create a store in index.js and the <App> needs to wrapped within <Provider> </Provider> component. 
Each component is made aware of Redux state by connect method.
Only class based components should be aware of redux state. Not the functional component.
7. mapStateToProps()
8. mapDispatchToProps()
9. Combining multiple reducers with connect
----------------Router-------------
1. Router, Rout, Link
2. History 
3. Link to , Switch exact
4. passing props to routed component
5. dynamically render component
----------Auth0--------
1. auth0 setup
2. jwt.io
3. handleAuth - auth0.parseHash() - to extract results from response that auth0 gives back 
4. handling callback and authentication
5. localstorage 
6. authCheck container - userLogsIn -> User Redirected to the CallBack component from Auth0 - > user is redirected to the authCheck Container where the Redux state is updated -> User is redirected to Home page with updated Redux state
User Logs Out ->  user is redirected to the authCheck Container where the Redux state is updated -> User is redirected to Home page with updated Redux state
7. Higer Order Component - functions that take component and return a new component
8. FLOW -> <Important> - Router.js -home page -> LoginComponent - Login Button -> calls Auth:login() -> auth0.authorize() -> goes to Auth0 validates and returns to the callback page defined in auth0 page -> router path '/callback' - calls handleAuthentication() - it has default redux props (with properties like url which contains the auth_token, id_token returned from auth0, location) -> auth0.handleAuth -validates the url items and extends the expireTime -> then it redirects to authCheck using history.replace('/authCheck') - authCheck will update the redux state - isAuthenticated - which is globally available using the auth_reducer - as authCheck has empty <div> user does not see anything - and then user is redirected to Home page with updated redux state.
Same with User Logout -> User redirected to authCheck where redux state is updated -> and then redirected to home page with updated redux state.
9. Silent Authentication
10. <TBD> Redux Thunk vs Regular Action Creator, Redux Saga, Next.js, Nest.js, Redux DevTool, Array Destructering, Array reduce method, 
-------------REACT HOOKS----------------
1. Hook the class functinality into functional component.
    means it allows functional component to read and update state
2. Rules - a. No Nested hooks
    b. Do not call hooks outside of the component function
3. 4 types of Hooks 
    a. useState() - similar to this.setState()
    b. useEffect() - similar to ComponentDidMount()
    c. useContext() - similar to react-redux. Allows you to access and update the global context state through the React context API.
    4. useReducer() - similar to react-redux. Allows you update the local component state through redux actions and reducers. Does not update the state globally by itself.
4. <TBD> </TBD>Create form with hooks - chapter 104,105,106
    code: https://github.com/iqbal125/react-hooks

-----------ORIGINAL README.md------------------------------------
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
