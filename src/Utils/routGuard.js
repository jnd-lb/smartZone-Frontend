import {Redirect, Route } from 'react-router-dom';

const RouteGuard= ({ component: Component, ...props }) => (
  <Route
    {...props}
    render={routeProps => {
      const item = localStorage.getItem("user");

      //TODO check if the info in loacal storage are real
      return item !== null ? (
        <Component {...routeProps} />
      ) : (
        <Redirect to="/dashboard/login" />
      );
    }}
  />
);

export default RouteGuard;