import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useAuth } from '../Hooks/Auth';
import Login from '../pages/Login';
const AuthRoutes: React.FC = () => {
    const { signed } = useAuth();
    return (
        <Switch>
            <Route path="/login" exact component={Login}  /> 
            <Redirect to={signed ? "/" : "/login"} />
        </Switch>
    )
}


export default AuthRoutes;