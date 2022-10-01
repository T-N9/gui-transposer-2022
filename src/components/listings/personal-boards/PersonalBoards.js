import React from "react";
import { Link } from "react-router-dom";

/* Icons */
import { AiFillFolderOpen } from "react-icons/ai";
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
      {/* Title */}
      <h1 className="font-secondary flex items-center gap-2 mb-4 text-2xl font-bold text-white">
        Your Library <Pencil2Icon />
      </h1>

      {/* No boards */}
      {personalBoardList.length === 0 && (
        <p className="my-3 text-white text-center font-secondary">
          You currently have no boards.
        </p>
      )}

      {/* Board listing */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-5">
        {personalBoardList.map((item, index) => {
          return (
            <Link
              onClick={handleBoardType}
              key={index}
              to={`/my-boards/${item.id}`}
            >
              <div className="listing-card">
                <div className="flex flex-col gap-5 bg-white p-2 bg-opacity-90 rounded-md">
                  <div>
                    <h1 className="text-xl text-dark transition-all font-bold">
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

                    <button className="primary-btn--info-outline text-lg font-bold">
                      <AiFillFolderOpen />
                    </button>
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
