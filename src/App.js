import React from "react";
import "./App.css";
import "./styles/temp.css";
import { Routes, Route } from "react-router";

/* Components */
import NavBar from "./components/common/nav-bar/NavBar";

/* Pages */
import { Main, Listing, SignUp, SignIn } from "./pages";

import ChordDb from "./pages/ChordDb";

import Hook from "./hook.app";

const App = () => {

  const { location } = Hook();

  return (
    <>
      {(location.pathname !== "/sign-up" && location.pathname !== '/sign-in') && <NavBar />}
    
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/boards/:boardId" element={<Main />} />
        <Route path="/chords" element={<ChordDb />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </>
  );
};

export default App;
