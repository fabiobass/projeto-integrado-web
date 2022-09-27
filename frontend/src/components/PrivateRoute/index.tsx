import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from 'util/auth';

type Props = {
  children: React.ReactNode;
  path: string;
};

function PrivateRoute({ children, path }: Props) {
  return (
    <Route
      path={path}
      render={({ location }) =>
        !isAuthenticated() ? (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        ) : (
          children
        )
      }
    />
  );
}

export default PrivateRoute;
