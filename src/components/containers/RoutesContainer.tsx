// Vendors
import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

// Config
import { localKey } from 'config/constants';

// Utils
import { searchItemLocal } from 'utils';

// Layouts
import { PrivateLayout } from 'layouts/PrivateLayout';
import { PublicLayout } from 'layouts/PublicLayout';

// Store

// Types
import { routeInformation, typeRoutes } from 'types/route';

interface IRoutesRootProps {
  readonly listRoutes: routeInformation[];
  readonly views: any;
}

const RoutesContainer: React.FC<IRoutesRootProps> = ({ listRoutes, views }) => {
  const isAuthenticated = false;

  console.log(views);
  console.log(listRoutes);

  return (
    <Switch>
      {listRoutes.map((route: routeInformation, key: number) => {
        return (
          <Route
            key={key}
            exact
            path={route.path}
            render={(routeProps) => {
              const Component = views[route.component];

              return route.type === typeRoutes.private ? (
                searchItemLocal(localKey) || isAuthenticated ? (
                  <PrivateLayout
                    title={route.label}
                    children={<Component {...routeProps} />}
                  />
                ) : (
                  <Redirect to="/iniciar-sesion" />
                )
              ) : !searchItemLocal(localKey) || !isAuthenticated ? (
                <PublicLayout
                  title={route.label}
                  children={<Component {...routeProps} />}
                />
              ) : (
                <Redirect to="/" />
              );
            }}
          />
        );
      })}
      <Redirect to="/" />
    </Switch>
  );
};

export default React.memo(RoutesContainer);
