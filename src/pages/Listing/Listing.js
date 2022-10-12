import React from "react";
import { Link } from "react-router-dom";

/* Hook */
import Hook from "./hook.listing";
import HookFirebaseAssets from "../../hook.firebaseAssets";

/* Components */
import HeroSection from "../../components/hero/HeroSection";
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

  const { getSessionUserInfo } = HookFirebaseAssets();

  return (
    <section className="container mx-auto my-5 p-5">
      {getSessionUserInfo === null ? (
        <>
          <HeroSection/>
          <PublicBoards />
        </>
      ) : (
        <>
          <PublicBoards />
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
                <button className={`primary-btn--info my-4`}>
                  Create New Board <RocketIcon />
                </button>
              </Link>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default Listing;
