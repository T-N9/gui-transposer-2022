import React from "react";
import { Link } from "react-router-dom";

import { GlobeIcon } from "@radix-ui/react-icons";

import Hook from "./hook.publicBoards";

const PublicBoards = () => {
  const { boardList,handleBoardType } = Hook();

  return (
    <div className="p-4 rounded-md shadow" style={{
      // background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
      backgroundImage: 'linear-gradient(60deg, #29323c 0%, #485563 100%)'
    }}>
      <h1 className="font-secondary flex items-center gap-2 text-2xl mb-2 font-bold text-white">
        Demo songs <GlobeIcon/>
      </h1>
      <div className= "board-listing--grid">
        {boardList.map((item, index) => {
          return (
            <Link onClick={handleBoardType} key={index} to={`/boards/${item.id}`}>
              <div className="p-2 w-full lg:w-auto shadow font-secondary rounded-md border-[3px] border-solid border-gray-50 bg-white min-w-[180px]">
                <div className="flex flex-col gap-5">
                  <div>
                    <h1 className="text-xl text-light-md font-bold">
                      {item.data.songTitle}
                    </h1>
                    <p>by <span className="text-dark font-bold">{item.data.artistName}</span></p>
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="text-xs text-gray-400">12 / 5 /2020</p>

                    <button className="primary-btn--info-outline text-xs font-bold">View</button>
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
