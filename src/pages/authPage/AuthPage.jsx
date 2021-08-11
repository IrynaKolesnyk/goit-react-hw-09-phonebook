import React from "react";
import { useRouteMatch } from "react-router-dom";
import Auth from "../../components/Auth/Auth";

const AuthPage = () => {
  const match = useRouteMatch();
  return (
    <>
      {match.url === "/register" ? <h2>Sign up</h2> : <h2>Log in</h2>}
      <Auth />
    </>
  );
};

export default AuthPage;
