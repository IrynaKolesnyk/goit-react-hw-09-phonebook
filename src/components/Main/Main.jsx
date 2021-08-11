import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import Loader from "react-loader-spinner";
import { getIsAuthenticated } from "../../redux/auth/auth-selectors";
import { mainRoutes } from "../../routes/mainRoutes";
import PrivateRoute from "../../routes/PrivateRoute";
import PublicRoute from "../../routes/PublicRoute";

const Main = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  return (
    <main>
      <Suspense
        fallback={
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={80}
            width={80}
            className="loader"
          />
        }
      >
        <Switch>
          {mainRoutes.map((route) =>
            route.isPrivate ? (
              <PrivateRoute
                {...route}
                key={route.path}
                isAuthenticated={isAuthenticated}
              />
            ) : (
              <PublicRoute
                {...route}
                key={route.path}
                isAuthenticated={isAuthenticated}
              />
            )
          )}
        </Switch>
      </Suspense>
    </main>
  );
};

export default Main;

// const mapStateToProps = (state) => ({
//   isAuthenticated: getIsAuthenticated(state),
// });
// export default connect(mapStateToProps)(Main);

// import React, { Suspense, lazy } from 'react';
// import { Route, Switch } from 'react-router-dom';
// import Loader from 'react-loader-spinner';
// import PrivateRoute from '../Routes/PrivateRoute';
// import PublicRoute from '../Routes/PublicRoute';

// const AsyncHomePage = lazy(() => import('../../pages/homePages/HomePage'));
// const AsyncContactsPage = lazy(() =>
//   import('../../pages/contactPages/ContactsPage'),
// );
// const AsyncRegistrPage = lazy(() =>
//   import('../../pages/registerPages/RegisterPage'),
// );
// const AsyncLoginPage = lazy(() => import('../../pages/loginPages/LoginPage'));

// const Main = () => {
//   return (
//     <main>
//       <div className="container">
//         <Suspense
//           fallback={
//             <Loader
//               type="ThreeDots"
//               color="#00BFFF"
//               height={80}
//               width={80}
//               className="loader"
//             />
//           }
//         >
//           <Switch>
//             <Route exact path="/" component={AsyncHomePage} />
//             <PrivateRoute path="/contacts" component={AsyncContactsPage} />
//             <PublicRoute
//               path="/register"
//               restricted
//               component={AsyncRegistrPage}
//             />
//             <PublicRoute path="/login" restricted component={AsyncLoginPage} />
//             {/* <Route exact path="/error" component={Error} /> */}
//           </Switch>
//         </Suspense>
//       </div>
//     </main>
//   );
// };

// export default Main;
