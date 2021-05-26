import React, { FC, HTMLAttributes, lazy, useMemo } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { ROUTES, pathes } from '../Route';
const NotFound = lazy(() => import('../containers/NotFound'));

const Main: FC<HTMLAttributes<HTMLDivElement>> = ({ ...attributes }) => {
  const routeLocation = useLocation();
  const pathName = useMemo(() => routeLocation.pathname, [routeLocation]);

  return (
    <main role="main" {...attributes}>
      {pathes.includes(pathName) ? (
        <Switch>
          {ROUTES.map((route, i) => (
            <Route key={i} component={route.component} path={route.path} exact={route.exact} />
          ))}
        </Switch>
      ) : (
        <NotFound />
      )}
    </main>
  );
};

export default Main;
