import { lazy } from 'react';

const Home = lazy(() => import('./containers/Home'));
const NotFound = lazy(() => import('./containers/NotFound'));
const Counter = lazy(() => import('./containers/Counter'));

export const ROUTES = [
  { component: Home, name: 'home', path: '/', exact: true },
  { component: NotFound, name: 'NotFound', path: '/NotFound', exact: true },
  { component: Counter, name: 'counter', path: '/counter', exact: true },
];

const createRouteList = (routes: Routes[]): RouteList => {
  const routeList: RouteList = Object.assign(
    {},
    ...routes.map((route) => ({
      [route.name]: route.path,
    })),
  );

  return routeList;
};

export const links: RouteList = createRouteList(ROUTES);
export const pathes: string[] = Object.values(links);
