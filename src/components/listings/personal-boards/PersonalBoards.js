import React from "react";
import { Link } from "react-router-dom";

/* Icons */
import {AiFillFolderOpen} from 'react-icons/ai';
import { Pencil2Icon } from "@radix-ui/react-icons";

import Hook from "./hook.personalBoards";
const PersonalBoard = () => {
  const { personalBoardList, handleBoardType } = Hook();

  return (
    <div
      className="p-4 rounded-md shadow"
      style={{
        backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <h1 className="font-secondary flex items-center gap-2 mb-4 text-xl font-bold text-white">
        Your Library <Pencil2Icon />
      </h1>

      {personalBoardList.length === 0 && (
        <p className="my-3 text-dark font-secondary">
          You currently have no boards.
        </p>
      )}

      <div className="grid gap-4 grid-cols-1 md:grid-cols-5">
        {personalBoardList.map((item, index) => {
          return (
            <Link
              onClick={handleBoardType}
              key={index}
              to={`/my-boards/${item.id}`}
            >
              <div className="p-2 w-full lg:w-auto shadow font-secondary rounded-md border-[3px] border-solid border-gray-50 bg-white">
                <div className="flex flex-col gap-5">
                  <div>
                    <h1 className="text-xl text-light-md font-bold">
                      {item.data.songTitle}
                    </h1>
                    <p>
                      by{" "}
                      <span className="text-dark font-bold">
                        {item.data.artistName}
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-gray-400">12 / 5 /2020</p>

                    <button className="primary-btn--info-outline text-lg font-bold"><AiFillFolderOpen/></button>
                  </div>
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
