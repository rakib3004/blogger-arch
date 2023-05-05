import { Redirect, Route, useNavigate } from 'react-router-dom';
const PublicRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  const navigateTo = useNavigate();

  <Route {...rest} render={props => (
    isAuthenticated ? <Redirect to="/" /> : navigateTo("/login")
  )} />
);

 const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  const navigateTo = useNavigate();

  <Route {...rest} render={props => (
    isAuthenticated ? <Component {...props} /> : navigateTo("/login")
  )} />
);

export default {PublicRoute, PrivateRoute};

