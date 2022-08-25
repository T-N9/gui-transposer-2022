import React from "react";

import Hook from "./hook.userProfile";
const UserProfile = () => {
  const {
    userName,
    userMail,
    isVerified,
    userProfile,
    profileName,

    /* Actions */
    handleLogOut,
  } = Hook();
  return (
    <>
      {userProfile !== null && (
        <section>
          <div className="container px-5 max-w-[500px] font-secondary mx-auto my-5 flex gap-4">
            <div className="user-profile w-12 h-12 rounded-full flex justify-center items-center text-white font-bold">
              {profileName}
            </div>
            <div>
              {/* <p className="">
                <span>Name :</span> <span>{userName}</span>
              </p>
              <p className="">
                <span>Mail :</span> <span>{userMail}</span>
              </p> */}

              <table
                className="profile-table"
                style={{ borderSpacing: "20px", verticalAlign: "top" }}
              >
                <tbody>
                  <tr>
                    <td className="font-bold text-gray-500">Name </td>
                    <td className="pl-3">{userName}</td>
                  </tr>
                  <tr>
                    <td className="font-bold  align-top text-gray-500">Mail </td>
                    <td className="pl-3">
                      {userMail} <br />
                      <span className="text-xs">
                        {isVerified
                          ? "Your Email is verified"
                          : "You are unverified"}.
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <br />
              <button
                onClick={handleLogOut}
                className="px-4 py-2 font-bold bg-danger text-white rounded text-xs"
              >
                Log Out
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default UserProfile;
