import React from "react";
import Navigation from "../Navigation/Navigation";
import HeaderStyled from "./HeaderNavStyled";

const Header = () => {
  return (
    <HeaderStyled>
      <Navigation />
    </HeaderStyled>
  );
};

export default Header;

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import HeaderStyled from './HeaderNavStyled';
// import { connect } from 'react-redux';
// import { getIsAuthenticated } from '../../redux/auth/auth-selectors';
// import UserMenu from '../UserMenu/UserMenu';
// import Auth from '../Auth/Auth';

// const Header = ({ isAuthenticated }) => {
//   return (
//     <HeaderStyled>
//       <div className="container">
//         <nav className="siteNav">
//           <div>
//             <NavLink
//               to="/"
//               exact
//               className="navLink homeLink"
//               activeClassName="activeLink"
//             >
//               Home
//             </NavLink>
//             {isAuthenticated && (
//               <NavLink
//                 to="/contacts"
//                 className="navLink"
//                 activeClassName="activeLink"
//               >
//                 Contacts
//               </NavLink>
//             )}
//           </div>
//           {isAuthenticated ? <UserMenu /> : <Auth />}
//         </nav>
//       </div>
//     </HeaderStyled>
//   );
// };

// const mapStateToProps = state => ({
//   isAuthenticated: getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(Header);
