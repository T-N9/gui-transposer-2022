import React, { useEffect } from "react";
import { useSelector } from "react-redux";

/* Hook */
import Hook from "./hook.inputLyric";

/* Icons */
import { DoubleArrowRightIcon, TrashIcon } from "@radix-ui/react-icons";

const InputLyric = ({
  inputLyric,
  textArea,
  formMessage,
  currentBoard,
  boardId,
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
    isNewBoard,
    /* action */
    megaFormSubmit,
    handleAddingBoardList,
  } = Hook(handleSubmit, currentBoard, inputLyric, setInputLyric, boardId);

  return (
    <>
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
                className="px-5 py-2 bg-light shadow-md text-xs rounded text-white"
              >
                Update Board
              </button>
              <button
                className="px-5 py-2 bg-danger shadow-md text-xs rounded text-white"
              >
                <TrashIcon/>
              </button>
            </>
          )}
        </div>
      </div>
      <form
        onSubmit={megaFormSubmit}
        className="container mt-5 mx-auto p-0 md:p-5 md:px-30 lg:px-48"
      >
        <button
          type="submit"
          className="bg-white border-2 border-blue-600 shadow-lg w-16 h-16 rounded-full fixed bottom-10 right-10 z-[1000] flex justify-center items-center font-bold text-blue-600 text-lg"
        >
          <span>
            GO <DoubleArrowRightIcon className="w-10" />
          </span>
        </button>

        <div className="mb-12 flex gap-x-3 gap-y-5 items-center flex-wrap">
          <div className="flex flex-col relative">
            <label className="text-xs" htmlFor="song-title">
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
            <label className="text-xs" htmlFor="artist-name">
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
        </div>

        <div className="relative">
          <textarea
            className="lyric-input min-h-[500px] w-full bg-blue-50 bg-opacity-50 p-2 md:p-3 border-solid border-2 border-blue-100 focus:outline-none focus:border-blue-300 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
            // defaultValue={inputLyric}
            tabIndex={-1}
            value={inputLyric}
            onChange={(e) => {
              setInputLyric(e.target.value);
            }}
            ref={textArea}
            onKeyDown={(e) => handleCombineKey(e)}
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Type chords and lyric"
          ></textarea>
          <span className="absolute hidden lg:block -top-4 left-2 text-xs text-gray-400">
            Ctrl + SPACE = Tab, at least a space between chords
          </span>

          {formMessage !== "" && (
            <span className="text-xs text-red-500">{formMessage}</span>
          )}
        </div>

        <button
          type="submit"
          className=" bg-blue-600 rounded-md text-white py-2 px-4 mx-auto table my-5"
        >
          Generate
        </button>
      </form>
    </>
  );
};

export default InputLyric;
