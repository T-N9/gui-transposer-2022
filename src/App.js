import React from "react";
import "./App.css";
import "./styles/temp.css";

/* Components */
import NavBar from "./components/common/nav-bar/NavBar";

/* Pages */
import Main from "./pages/Main/Main";

const App = () => {
  return (
    <>
      <NavBar />
      <Main />
    </>
  );
};

export default App;
