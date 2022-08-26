import React from "react";
import { Link } from "react-router-dom";

import { Pencil2Icon } from "@radix-ui/react-icons";

import Hook from "./hook.personalBoards";
const PersonalBoard = () => {
  const { personalBoardList, handleBoardType } = Hook();

  return (
    <div>
      <h1 className="font-secondary flex items-center gap-2 mb-2 text-xl font-bold text-dark">
        Your Library <Pencil2Icon />
      </h1>

      {personalBoardList.length === 0 && <p className="my-3 text-dark font-secondary">You currently have no boards.</p>}

      <div className="grid gap-4 grid-cols-1 md:grid-cols-5">
        {personalBoardList.map((item, index) => {
          return (
            <Link
              onClick={handleBoardType}
              key={index}
              to={`/my-boards/${item.id}`}
            >
              <div className="p-2 w-full lg:w-auto shadow font-secondary rounded-md">
                <div>
                  <h1 className="text-xl text-primary font-bold">
                    {item.data.songTitle}
                  </h1>
                  <p>
                    by <span className="text-info">{item.data.artistName}</span>
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PersonalBoard;
