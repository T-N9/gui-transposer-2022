import React from "react";

import Hook from "./hook.userProfile";
const UserProfile = () => {
  const {
    userName,
    userMail,
    isVerified,
    userDetail,
    profileName,

    /* Actions */
    handleLogOut,
  } = Hook();
  return (
    <>
      {userDetail !== null && (
        <section>
          <div className="container max-w-[500px] font-secondary mx-auto my-5">
            <div className="user-profile w-12 h-12 rounded-full flex justify-center items-center text-white font-bold">
              {profileName}
            </div>
            <p>Name : {userName}</p>
            <p>Email : {userMail}</p>

            {isVerified ? "Your Email is verified" : "You are unverified"}

            <br />
            <br />
            <button onClick={handleLogOut} className="px-4 py-2 font-bold bg-danger text-white rounded text-xs">
              Log Out
            </button>
          </div>
        </section>
      )}
    </>
  );
};

export default UserProfile;
