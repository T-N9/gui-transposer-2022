import React from "react";

import Hook from "./hook.publicBoards";

import { Link } from "react-router-dom";

const PublicBoards = () => {
  const { boardList } = Hook();

  return (
    <div className="">
      <div className="flex gap-4 flex-wrap">
        {boardList.map((item, index) => {
          return (
            <Link key={index} to={`/boards/${item.id}`}>
              <div className="p-2 shadow font-secondary rounded-md">
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
