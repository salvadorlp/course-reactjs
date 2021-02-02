import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home'
import Panel from './pages/Panel'
import { authenticated } from './auth'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        authenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: "/", state: {from:props.location} }} /> 
        )
    )} />
);

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <PrivateRoute exact path="/panel" component={Panel}></PrivateRoute>
            </Switch>
        </Router>
    );
}

export default Routes;