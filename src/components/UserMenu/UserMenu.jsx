import React from 'react';
import { connect } from 'react-redux';
import { getUsername } from '../../redux/auth/auth-selectors';
import defaultAvatar from '../../images/defaultAvatar.png';
import { logOut } from '../../redux/auth/auth-operations';
import UserMenuStyled from './UserMenuStyled';
import Button from '@material-ui/core/Button';

const UserMenu = ({ avatar, name, onLogout }) => {
  return (
    <UserMenuStyled>
      <img src={avatar} width="30px" alt={name} className="userMenuImg" />
      <h3 className="userMenuTitle">Welcome, {name}</h3>
      {/* <button type="button" onClick={onLogout}>
        Logout
      </button> */}
      <Button
        type="button"
        onClick={onLogout}
        variant="outlined"
        color="primary"
      >
        Log Out
      </Button>
    </UserMenuStyled>
  );
};

const mapStateToProps = state => ({
  name: getUsername(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
