import React from "react";
import { Link } from "react-router-dom";

import { GlobeIcon } from "@radix-ui/react-icons";

import Hook from "./hook.publicBoards";

const PublicBoards = () => {
  const { boardList,handleBoardType } = Hook();

  return (
    <div className="">
      <h1 className="font-secondary flex items-center gap-2 text-xl mb-2 font-bold text-dark">
        Explore songs <GlobeIcon/>
      </h1>
      <div className= "grid gap-4 grid-cols-1 md:grid-cols-5">
        {boardList.map((item, index) => {
          return (
            <Link onClick={handleBoardType} key={index} to={`/boards/${item.id}`}>
              <div className="p-2 w-full lg:w-auto shadow font-secondary rounded-md">
                <div>
                  <h1 className="text-xl text-primary font-bold">
                    {item.data.songTitle}
                  </h1>
                  <p>by <span className="text-info">{item.data.artistName}</span></p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PublicBoards;
