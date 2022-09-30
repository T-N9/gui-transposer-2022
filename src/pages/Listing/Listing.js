import React from "react";
import { Link } from "react-router-dom";

/* Hook */
import Hook from "./hook.listing";

/* Components */
import UserBoardList from "../../components/userData/UserBoardList";
import { PublicBoards, PersonalBoards } from "../../components/listings";

/* Icons */
import { RocketIcon } from "@radix-ui/react-icons";

const Listing = () => {
  const {
    boardList,
    isAdmin, // action
    handlePersonalBoard,
    handlePublicBoard,
  } = Hook();

  return (
    <section className="container mx-auto my-5 p-5">
      <PublicBoards />

      {/* <div className="pb-4 border-b-[1px]">
        <h1 className="font-secondary">Explore</h1>
        <div className="flex gap-3 py-2 flex-wrap">
          {boardList?.map((item, index) => {
            return (
              <Link
                key={index}
                className="w-full md:w-auto"
                to={`/boards/${item.id}`}
              >
                <div className="shadow p-2 inline-block font-secondary min-w-[200px] w-full md:w-auto">
                  <div>
                    <p className="font-bold text-orange-400 text-base">
                      {item.songTitle}
                    </p>
                    <p>
                      by{" "}
                      <span className="text-dark font-bold text-sm">
                        {item.artistName}
                      </span>
                    </p>
                  </div>
                  <div className="flex gap-1 flex-wrap">
                    {item.detectedChords.map((item, index) => {
                      return (
                        <p key={index} className="text-info font-primary">
                          {item}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div> */}

      <hr className="mt-5" />

      {!isAdmin && (
        <>
          <div className="mt-5">
            <PersonalBoards />
          </div>
          <hr className="mt-5" />
        </>
      )}

      <div className="flex justify-center items-center">
        {isAdmin ? (
          <Link onClick={handlePublicBoard} to={"/boards/new"}>
            <button
              className={`rounded-md py-2 px-4 my-5 flex justify-center items-center gap-2 font-secondary shadow-md bg-dark text-success`}
            >
              Create New Board <RocketIcon />
            </button>
          </Link>
        ) : (
          <Link onClick={handlePersonalBoard} to={"/my-boards/new"}>
            <button
              className={`primary-btn--info my-4`}
            >
              Create New Board <RocketIcon />
            </button>
          </Link>
        )}
      </div>
    </section>
  );
};

export default Listing;
