import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppRoutes, { PublicRoutes, CustomRoute } from "./routes/AppRoutes";

import { Provider } from "react-redux";
import store from "./redux/store";
import PrivateRoute from "./routes/PrivateRoutes";

const renderRoutes = (routes: CustomRoute[]) => (
  <>
    {routes.map((route) => {
      const element = route.element && route.element();
      return <Route key={route.path} path={route.path} element={element} />;
    })}
  </>
);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
          {renderRoutes(PublicRoutes)}
          <Route path="/" element={<PrivateRoute />}>
            {renderRoutes(AppRoutes)}
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
