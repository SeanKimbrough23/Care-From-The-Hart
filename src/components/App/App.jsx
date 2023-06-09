import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../Nav/Nav";
import Footer from "../Footer/Footer";
import TextareaValidator from "../Comments/Comments";
import RequestToBook from "../RequestToBook/RequestToBook";
import PendingRequestsForm from "../PendingRequests/PendingRequests";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import ThankYou from "../Thankyou/ThankYou";
import AboutPage from "../AboutPage/AboutPage";
import UserPage from "../UserPage/UserPage";
import InfoPage from "../InfoPage/InfoPage";
import LandingPage from "../LandingPage/LandingPage";
import LogOutButton from "../LogOutButton/LogOutButton";
import LoginPage from "../LoginPage/LoginPage";
import Portfolio from "../Portfolio/Portfolio";
import RegisterPage from "../RegisterPage/RegisterPage";
import Calendar from "../Calendar/Calendar";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: "FETCH_USER" });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/AboutMe"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>
          <ProtectedRoute
            // logged in pending requests
            exact
            path="/Pending"
          >
            <PendingRequestsForm />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute>

          <Route path="/Calendar">
            <Calendar />{" "}
          </Route>
          <Route path="/ThankYou">
            <ThankYou />{" "}
          </Route>
          <Route path="/Portfolio">
            <Portfolio />{" "}
          </Route>
          <Route path="/Booking">
            <RequestToBook />
          </Route>
          <Route exact path="/registration">
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the registration page
              <RegisterPage />
            )}
          </Route>

          <Route exact path="/home">
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the Landing page
              <LandingPage />
            )}
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

//           {/* For protected routes, the view could show one of several things on the same route.
//             Visiting localhost:3000/user will show the UserPage if the user is logged in.
//             If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
//             Even though it seems like they are different pages, the user is always on localhost:3000/user */}
//           <ProtectedRoute
//             // logged in shows UserPage else shows LoginPage
//             exact
//             path="/user"
//           >
//             <UserPage />
//           </ProtectedRoute>
//           <ProtectedRoute
//             // logged in shows UserPage else shows LoginPage
//             exact
//             path="/adminhome"
//           >
//             <UserPage />
//           </ProtectedRoute>
//           <Route path="/Calendar">
//             <Calendar />
//           </Route>
//           <Route path="/home">
//             <AboutPage />
//           </Route>
//           <ProtectedRoute
//             // logged in shows InfoPage else shows LoginPage
//             exact
//             path="/info"
//           >
//             <InfoPage />
//           </ProtectedRoute>

//           <Route exact path="/login">
//             {user.id ? (
//               // If the user is already logged in,
//               // redirect to the /user page
//               <Redirect to="/user" />
//             ) : (
//               // Otherwise, show the login page
//               <LoginPage />
//             )}
//           </Route>
//           <Route exact path="/Portfolio">
//             {user.id ? (
//               // If the user is already logged in,
//               // redirect them to the /user page
//               <Redirect to="/user" />
//             ) : (
//               // Otherwise, show the registration page
//               <Portfolio />
//             )}
//           </Route>

//           <Route exact path="/registration">
//             {user.id ? (
//               // If the user is already logged in,
//               // redirect them to the /user page
//               <Redirect to="/user" />
//             ) : (
//               // Otherwise, show the registration page
//               <RegisterPage />
//             )}
//           </Route>

//           <Route exact path="/Home">
//             {user.id ? (
//               // If the user is already logged in,
//               // redirect them to the /user page
//               <Redirect to="/user" />
//             ) : (
//               // Otherwise, show the Landing page
//               <LandingPage />
//             )}
//           </Route>
//           <Route exact path="/Booking">
//             {user.id ? (
//               // If the user is already logged in,
//               // redirect them to the /user page
//               <Redirect to="/user" />
//             ) : (
//               // Otherwise, show the Landing page
//               <RequestToBook />
//             )}
//           </Route>

//           {/* If none of the other routes matched, we will show a 404. */}
//           <Route>
//             <h1>404</h1>
//           </Route>
//         </Switch>
//         <Footer />
//       </div>
//     </Router>
//   );
// };
