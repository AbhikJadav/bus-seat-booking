import React from "react";
import { Navigate, Route, Routes } from "react-router";
import RoutesList from "./router";
import AuthLayout from "./layout/AuthLayout";
import PrivateLayout from "./layout/PrivateLayout";
import PublicLayout from "./layout/PublicLayout";
// eslint-disable-next-line no-restricted-imports

const App = () => {
  // const user = useReducerData("auth", "user", "");
  const user = true;

  const renderRoutes = () => {
    const isLogin = user;
    const renderRoute = (Component, layout, isPrivate) => {
      if (Component) {
        switch (layout) {
          case "private":
            return isLogin && isPrivate ? (
              <PrivateLayout>
                <Component />
              </PrivateLayout>
            ) : (
              <Navigate to="/" />
            );
          case "auth":
            return !isLogin ? (
              <Navigate to="/" />
            ) : (
              <AuthLayout>
                <Component />
              </AuthLayout>
            );
          case "public":
          default:
            return (
              <PublicLayout>
                <Component />
              </PublicLayout>
            );
        }
      }
      return null;
    };

    return RoutesList.map((route) => (
      <Route
        key={route.name}
        path={route.path}
        element={renderRoute(route.component, route.layout, route.isPrivate)}
      />
    ));
  };

  return (
    <div className="App">
      <Routes>{renderRoutes()}</Routes>
    </div>
  );
};

export default App;
