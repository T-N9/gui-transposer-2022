import React from "react";
import "./App.css";
import "./styles/temp.css";
import { Routes, Route } from "react-router";

/* Components */
import NavBar from "./components/common/nav-bar/NavBar";

/* Pages */
import { Main, Listing } from "./pages";

const App = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Listing/>}/>
        <Route path="/boards/:boardId" element={<Main/>}/>
      </Routes>

    </>
  );
};

export default App;
