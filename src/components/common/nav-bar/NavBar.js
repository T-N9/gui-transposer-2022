import React from "react";
import { Logo } from "../../../assets";
import { Link } from "react-router-dom";

/* Icons */
import { AvatarIcon } from "@radix-ui/react-icons";

/* Hook */
import Hook from "./hook.navBar";

const NavBar = () => {
  const { profileName } = Hook();

  return (
    <nav className="shadow px-4 md:px-0">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={"/"}>
          <img className="w-32" src={Logo} alt="gui-transpo-logo" />
        </Link>

        <div>
          <ul>
            <li className="">
              <Link to="/profile">
                <div className="user-profile w-10 h-10 border-2 border-gray-200 rounded-full flex justify-center items-center text-white font-bold">
                  {profileName}
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
