import { WithAuth } from '../context/main-context';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
    component: RouteComponent,
    isAuthorized,
    ...rest
  }) => {
    return (
        <Route
          {...rest}
          render={routeProps =>
            isAuthorized ? (
              <RouteComponent {...routeProps} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
      );
}
export default WithAuth(PrivateRoute);