import React from "react";
import "./App.css";
import "./styles/general.css";
import { Routes, Route } from "react-router";

/* Components */
import NavBar from "./components/common/nav-bar/NavBar";
import { Loading, AlertMessage } from "./components/common";

/* Pages */
import {
  Main,
  Listing,
  SignUp,
  SignIn,
  ResetPassword,
  UserProfile,
} from "./pages";
import ChordDb from "./pages/ChordDb";

/* Constants */
import {
  HOME,
  SIGN_IN,
  SIGN_UP,
  RESET_PASSWORD,
  PROFILE,
} from "./constants/routeNames";

/* App Hook */
import Hook from "./hook.app";

const App = () => {
  const { location } = Hook();

  return (
    <>
      {location.pathname !== SIGN_UP &&
        location.pathname !== SIGN_IN &&
        location.pathname !== RESET_PASSWORD && <NavBar />}

      <Routes>
        {/* Operational pages */}
        <Route path={HOME} element={<Listing />} />
        <Route path="/boards/:boardId" element={<Main isPersonal={false}/>} />
        <Route path="/my-boards/:boardId" element={<Main isPersonal={true}/>} />

        {/* authentication pages */}
        <Route path="/chords" element={<ChordDb />} />
        <Route path={SIGN_UP} element={<SignUp />} />
        <Route path={SIGN_IN} element={<SignIn />} />
        <Route path={RESET_PASSWORD} element={<ResetPassword />} />

        {/* Others  */}
        <Route path={PROFILE} element={<UserProfile />} />
      </Routes>

      <Loading />
      <AlertMessage />
    </>
  );
};

export default App;
