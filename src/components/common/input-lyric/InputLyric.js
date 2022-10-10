import React, { useState } from "react";

/* Hook */
import Hook from "./hook.inputLyric";

/* Icons */
import { TrashIcon } from "@radix-ui/react-icons";

/* Constants */
import { tuning_List } from "../../../constants/constants";

import AlertBox from "../alert-box/AlertBox";

const InputLyric = ({
  inputLyric,
  textArea,
  formMessage,
  currentBoard,
  boardId,
  isPersonal,
  /* actions */
  setInputLyric,
  handleSubmit,
  handleCombineKey,
}) => {
  const {
    register,
    errors,
    watch,
    trigger,
    setValue,
    currentInputtedLyric,
    formSongTitle,
    formArtistName,
    formCapoFret,
    isNewBoard,
    isAdmin,
    capoOnFret,
    // isPersonal,
    /* action */
    megaFormSubmit,
    handleAddingBoardList,
    handleDeletingBoard,
    handleUpdatingBoard,
    handleCallAlertBox,

    /* Personal boards */
    handleAddingPersonalBoardList,
    handleDeletingPersonalBoard,
    handleUpdatingPersonalBoard,

    setCapoOnFret,
  } = Hook(handleSubmit, currentBoard, inputLyric, setInputLyric, boardId);

  const [confirmAction, setConfirmAction] = useState(
    () => handleUpdatingPersonalBoard
  );
  const handleClickUpdatePersonal = () => {
    handleCallAlertBox("Are you sure updating this board?");
    setConfirmAction(() => handleUpdatingPersonalBoard);
  };

  const handleClickDeletePersonal = () => {
    handleCallAlertBox("Are you sure deleting this board?");
    setConfirmAction(() => handleDeletingPersonalBoard);
  };

  const handleClickUpdatePublic = () => {
    handleCallAlertBox("Are you sure updating this board?");
    setConfirmAction(() => handleUpdatingBoard);
  };

  const handleClickDeletePublic = () => {
    handleCallAlertBox("Are you sure deleting this board?");
    setConfirmAction(() => handleDeletingBoard);
  };

  return (
    <>
      {/* Manage Public boards for admins */}
      {isAdmin && (
        <div>
          <div className="container mt-2 mx-auto p-0 md:p-5 md:px-30 lg:px-48 lg:py-2 font-secondary flex justify-end items-center gap-2">
            {isNewBoard && (
              <button
                onClick={handleAddingBoardList}
                className="px-5 py-2 bg-light shadow-md text-xs rounded text-white"
              >
                Add to Library
              </button>
            )}
            {!isNewBoard && (
              <>
                <button
                  onClick={handleClickUpdatePublic}
                  className="px-5 py-2 bg-light shadow-md text-xs rounded text-white"
                >
                  Update Board
                </button>
                <button
                  onClick={handleClickDeletePublic}
                  className="px-5 py-2 bg-danger shadow-md text-xs rounded text-white"
                >
                  <TrashIcon />
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Manage Personal boards for normal users */}
      {!isAdmin && isPersonal && (
        <div>
          <div className="container mt-2 mx-auto p-0 md:p-5 md:px-30 lg:px-48 lg:py-2 font-secondary flex justify-end items-center gap-2">
            {isNewBoard && (
              <button
                onClick={handleAddingPersonalBoardList}
                className="px-5 py-2 bg-light shadow-md text-xs rounded text-white"
              >
                Add to Library
              </button>
            )}
            {!isNewBoard && (
              <>
                <button
                  onClick={handleClickUpdatePersonal}
                  className="px-5 py-2 bg-light shadow-md text-xs rounded text-white"
                >
                  Update Board
                </button>
                <button
                  onClick={handleClickDeletePersonal}
                  className="px-5 py-2 bg-danger shadow-md text-xs rounded text-white"
                >
                  <TrashIcon />
                </button>
              </>
            )}
          </div>
        </div>
      )}

      <form
        onSubmit={megaFormSubmit}
        className="container mt-5 mx-auto p-0 md:p-5 md:px-30 lg:px-48"
      >
        <button
          type="submit"
          className="bg-secondary border-2 border-secondary text-light w-16 h-16 rounded-full fixed bottom-10 right-10 z-[1000] shadow-md font-secondary flex justify-center items-center font-bold text-lg transition-all hover:bg-opacity-90"
        >
          <span>GO</span>
        </button>

        <div className="mb-6 flex gap-x-3 gap-y-5 items-center flex-wrap">
          <div className="flex flex-col relative">
            <label
              className="text-sm font-secondary text-gray-600 mb-1"
              htmlFor="song-title"
            >
              Song title:
            </label>
            <input
              className="primary-input"
              defaultValue={formSongTitle}
              type="text"
              id="song-title"
              name="song-title"
              {...register("songTitle", { required: true })}
            />
            {errors.songTitle && (
              <span className="text-danger text-xs mt-2 absolute -bottom-5 left-0">
                *This field is required
              </span>
            )}
          </div>

          <div className="flex flex-col relative">
            <label
              className="text-sm font-secondary text-gray-600 mb-1"
              htmlFor="artist-name"
            >
              Artist name:
            </label>
            <input
              className="primary-input"
              defaultValue={formArtistName}
              type="text"
              id="artist-name"
              name="artist-name"
              {...register("artistName", { required: true })}
            />
            {errors.artistName && (
              <span className="text-danger text-xs mt-2 absolute -bottom-5 left-0">
                *This field is required
              </span>
            )}
          </div>

          <div className="flex flex-col relative">
            <label
              className="text-sm font-secondary text-gray-600 mb-1"
              htmlFor="capoFret"
            >
              Capo on:
            </label>
            <select
              value={capoOnFret}
              onChange={(e) => {
                setCapoOnFret(e.target.value);
              }}
              className="p-[10px] primary-input"
              name="capoFret"
              id="capoFret"
            >
              <option value={0}>No Capo</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
              <option value={11}>11</option>
              <option value={12}>12</option>
            </select>
          </div>

          <div className="flex flex-col relative">
            <label
              className="text-sm font-secondary text-gray-600 mb-1"
              htmlFor="songTuning"
            >
              Tuning:
            </label>
            <select
              className="p-[10px] primary-input"
              name="songTuning"
              id="songTuning"
            >
              {
                tuning_List.map((tuning, index) => {
                  return (
                    <option key={index} value={tuning}>{tuning}</option>
                  )
                })
              }
            </select>
          </div>
        </div>

        <div className="relative">
          <label
            className="text-sm font-secondary text-gray-600 mb-1"
            htmlFor="lyric-input"
          >
            Lyrics and chords:
          </label>
          <textarea
            className="lyric-input min-h-[500px] w-full bg-white bg-opacity-50 p-2 md:p-3 border-solid border-2 border-blue-100 focus:outline-none focus:border-blue-300 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 transition-all outline-none focus:shadow-2xl"
            // defaultValue={inputLyric}
            tabIndex={-1}
            value={inputLyric}
            onChange={(e) => {
              setInputLyric(e.target.value);
            }}
            ref={textArea}
            onKeyDown={(e) => handleCombineKey(e)}
            name="lyric-input"
            id="lyric-input"
            cols="30"
            rows="10"
            placeholder="Type chords and lyric"
          ></textarea>
          <span className="absolute hidden lg:block top-1 font-secondary right-2 text-xs text-gray-400">
            Ctrl + SPACE = Tab, at least a space between chords
          </span>

          {formMessage !== "" && (
            <span className="text-xs text-danger">{formMessage}</span>
          )}
        </div>

        <button
          type="submit"
          className=" bg-secondary text-light font-bold text-xl rounded-md py-2 px-8 shadow-md font-secondary mx-auto table mt-11 transition-all hover:bg-opacity-90"
        >
          Generate
        </button>
      </form>

      <AlertBox confirmAction={confirmAction} />
    </>
  );
};

export default InputLyric;
