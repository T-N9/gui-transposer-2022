import React from "react";
import "./App.css";
import "./styles/temp.css";
import { Routes, Route } from "react-router";

/* Components */
import NavBar from "./components/common/nav-bar/NavBar";

/* Pages */
import { Main, Listing } from "./pages";

import ChordDb from "./pages/ChordDb";

const App = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Listing/>}/>
        <Route path="/boards/:boardId" element={<Main/>}/>
        <Route path="/chords" element={<ChordDb/>}/>
      </Routes>

    </>
  );
};

export default App;
