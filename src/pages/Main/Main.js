import React, { useRef, useState, useEffect } from "react";

/* Components */
import LyricLine from "../../components/common/lyric-line/LyricLine";
import SongBuilder from "../../components/builder";

/* Hook */
import Hook from "./hook.main";

const Main = () => {
  const {
    inputLyric,
    transposedChords,
    transposeLvl,
    detectedChords,
    lyricBoard,
    editMode,
    textArea,
    /* actions */
    setInputLyric,
    handleSubmit,
    setTransposeLvl,
    handleTransposeDown,
    handleTransposeUp,
    setEditMode,
    handleCombineKey
  } = Hook();

  return (
    <main className="mt-12 mb-24 mx-5 lg:mx-0">
      {/* <SongBuilder/> */}
      {(lyricBoard.length === 0 || editMode) && (
        <form className="container mx-auto" onSubmit={handleSubmit}>
          <div className="relative">
            <textarea
              className="lyric-input w-full bg-blue-50 bg-opacity-50 p-5 border-solid border-2 border-blue-100 focus:outline-none focus:border-blue-300 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
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
            >
            </textarea>
            <span className="absolute -top-4 left-2 text-xs text-gray-400">Ctrl + SPACE = Tab</span>
          </div>

          <button className=" bg-blue-600 rounded-md text-white py-2 px-4 mx-auto table my-5">
            Generate
          </button>
        </form>
      )}

      <section className="">
        <div className="flex container mx-auto justify-start gap-x-7 items-center">
          <span>Chords :</span> 
          {transposedChords.length > 0 && transposeLvl !== 0 ? (
            <div className=" flex text-xl gap-x-5 font-medium">
              {transposedChords.length > 0 &&
                transposedChords.map((chord) => {
                  return <p key={chord}>{chord}</p>;
                })}
            </div>
          ) : (
            <div className=" flex text-xl gap-x-5 font-medium">
              {detectedChords.length > 0 &&
                detectedChords.map((chord) => {
                  return <p key={chord}>{chord}</p>;
                })}
            </div>
          )}
        </div>

        <div
          className={`mx-auto fixed bottom-5 left-1/2 transform -translate-x-1/2 inline-flex items-center justify-center gap-x-4 shadow-md px-5 py-3 rounded-lg bg-white ${
            detectedChords.length === 0 &&
            "opacity-70 select-none pointer-events-none"
          }`}
        >
          {transposeLvl !== 0 && (
            <h1 className="flex justify-center items-center rounded-full text-xs absolute top-0 -right-3 bg-blue-500 text-white w-5 h-5">
              {transposeLvl}
            </h1>
          )}

          <button
            className="bg-white text-lg shadow w-7 h-7 flex justify-center items-center rounded-full"
            onClick={handleTransposeDown}
          >
            -
          </button>
          <button
            className="border flex border-solid border-gray-50 px-2 rounded"
            onClick={() => setTransposeLvl(0)}
          >
            Reset
          </button>
          <button
            className="bg-white text-lg shadow w-7 h-7 flex justify-center items-center rounded-full"
            onClick={handleTransposeUp}
          >
            +
          </button>
        </div>
      </section>

      {lyricBoard.length > 0 && !editMode && (
        <pre className="lyric-board container mx-auto font-primary p-5 overflow-x-auto">
          <button
            onClick={() => setEditMode(true)}
            className="float-right bg-blue-500 text-white py-1 px-2 rounded shadow text-sm"
          >
            Edit
          </button>
          {lyricBoard.length > 0 &&
            lyricBoard.map((line, index) => {
              return (
                <LyricLine
                  key={index}
                  line={line}
                  lyricBoard={lyricBoard}
                  transposeLvl={transposeLvl}
                  detectedChords={detectedChords}
                  transposedChords={transposedChords}
                />
              );
            })}
        </pre>
      )}
    </main>
  );
};

export default Main;
