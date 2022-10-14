import React from "react";
import { Logo } from "../../../assets";
import { Link } from "react-router-dom";

/* Hook */
import Hook from "./hook.navBar";
import HookFirebaseAssets from "../../../hook.firebaseAssets";

const NavBar = () => {
  const { profileName } = Hook();
  const { getSessionUserInfo } = HookFirebaseAssets();

  return (
    <nav className="shadow px-4 md:px-0">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={"/"}>
          <img width={176} height={57.91} className="w-44" src={Logo} alt="gui-transpo-logo" />
        </Link>

        <div>
          {
            getSessionUserInfo === null ?
            <ul>
              <li>
                <Link to="/register">
                  <button className="primary-btn--info-outline">Register</button>
                </Link>
              </li>
            </ul>
            :
            <ul>
            <li className="">
              <Link to="/profile">
                <div className="user-profile w-10 h-10 border-2 border-gray-200 rounded-full flex justify-center items-center text-white font-bold">
                  {profileName}
                </div>
              </Link>
            </li>
          </ul>
          }

        </div>
      </div>
    </nav>
  );
};

export default NavBar;
