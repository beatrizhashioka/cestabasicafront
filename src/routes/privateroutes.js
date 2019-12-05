import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { getUser, isTokenExpired, logout } from '../services/auth';
export { isAuthenticated } from '../services/auth';
export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  isadmin = false,
  ...rest
}) {

  if (!isAuthenticated() && isPrivate) {
    return <Redirect to="/" />;
  }
  if (isAuthenticated() && !isPrivate) {
    return <Redirect to="/aleat" />;
  }
  if (isAuthenticated() && isPrivate && isadmin && !getUser().isadmin) {
    return <Redirect to="/aleat" />;
  }
  if (isTokenExpired()) {
    logout();
    return <Redirect to="/" />;
  }
  return (
    <>
      {!isPrivate}
      <Route {...rest} component={Component} />
    </>
  );

}

