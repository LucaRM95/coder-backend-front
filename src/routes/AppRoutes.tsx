import Register from "../pages/register/Register";
import Products from "../pages/products/Products";
import Login from "../pages/login/Login";

export interface CustomRoute {
  readonly name: string;
  readonly path: string;
  readonly children?: Array<any>;
  readonly checkAuth?: boolean;
  readonly element?: () => JSX.Element;
  readonly loader?: () => void;
}

export interface SubRoutes {
  readonly name?: string;
  readonly path: string;
  readonly children?: Array<any>;
  readonly element?: () => JSX.Element;
}

export const PublicRoutes: Array<CustomRoute> = [
  {
    name: "login",
    path: "/login",
    element: () => <Login />,
  },
  {
    name: "register",
    path: "/register",
    element: () => <Register />,
  },
];

const AppRoutes: Array<CustomRoute> = [
  {
    name: "home",
    path: "/",
    element: () => <Products />,
  },
  {
    name: "products",
    path: "/products",
    element: () => <Products />,
  },
];

export default AppRoutes;
