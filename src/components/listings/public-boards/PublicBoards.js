import React from "react";
import { Link } from "react-router-dom";

/* Icons */
import { AiFillFolderOpen } from "react-icons/ai";
import { GlobeIcon } from "@radix-ui/react-icons";

import Hook from "./hook.publicBoards";

const PublicBoards = () => {
  const { boardList, handleBoardType } = Hook();

  return (
    <div
      className="p-4 rounded-md shadow"
      style={{
        backgroundImage: "linear-gradient(60deg, #29323c 0%, #485563 100%)",
      }}
    >
      {/* Title */}
      <h1 className="font-secondary flex items-center gap-2 text-2xl mb-4 font-bold text-white">
        Demo songs <GlobeIcon />
      </h1>

      {/* Board Listing */}
      <div className="board-listing--grid">
        {boardList.map((item, index) => {
          return (
            <Link
              onClick={handleBoardType}
              key={index}
              to={`/boards/${item.id}`}
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

export default PublicBoards;
