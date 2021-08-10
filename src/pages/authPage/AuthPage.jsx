import React from "react";
import { withRouter } from "react-router-dom";
import Auth from "../../components/Auth/Auth";

const AuthPage = ({ location }) => {
  const pathname = location.pathname;
  return (
    <>
      {pathname === "/register" ? <h2>Sign up</h2> : <h2>Log in</h2>}
      <Auth />
    </>
  );
};

export default withRouter(AuthPage);
