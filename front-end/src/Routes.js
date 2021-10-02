import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './helper/PrivateRoute';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { UserInfoPage } from './pages/UserInfoPage';

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute path="/" exact>
                    <UserInfoPage />
                </PrivateRoute>
                <Route path="/login" >
                    <LoginPage />
                </Route>
                <Route path="/register">
                    <RegisterPage />
                </Route>
            </Switch>
        </Router>
    );
}