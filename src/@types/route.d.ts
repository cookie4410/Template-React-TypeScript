interface componentRegistry {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}

interface Routes {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  name: string;
  path: string;
  exact: boolean;
}

interface RouteList {
  [key: string]: string;
}
