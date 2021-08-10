import React from "react";
import { connect } from "react-redux";
import { logoutSuccess } from "../../redux/auth/auth-actions";
import { mainRoutes } from "../../routes/mainRoutes";
import { getIsAuthenticated } from "../../redux/auth/auth-selectors";
import NavigationListItem from "./NavigationListItem";
import UserMenu from "../UserMenu/UserMenu";

const Navigation = ({ isAuthenticated, logoutSuccess }) => {
  return (
    <nav>
      <ul className="navList">
        {mainRoutes.map((route) => (
          <NavigationListItem
            {...route}
            key={route.path}
            isAuthenticated={isAuthenticated}
          />
        ))}
        {isAuthenticated && <UserMenu />}
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps, { logoutSuccess })(Navigation);
