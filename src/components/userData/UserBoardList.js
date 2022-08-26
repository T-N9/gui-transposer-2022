import React from "react";

import Hook from "./hook.userBoardList";
const UserBoardList = () => {
  const {} = Hook();

  return (
    <div>
      <h1 className="font-secondary mb-2 font-bold text-dark">Your Library</h1>

      <div className= "flex gap-4 flex-col lg:flex-row flex-wrap">
        
      </div>
    </div>
  );
};

export default UserBoardList;
