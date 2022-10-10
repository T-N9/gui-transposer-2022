import React from "react";
import Draggable from "react-draggable";
import Loading from "react-loading-components";
import { useSelector } from "react-redux";

import DefineChord from "../../common/chord-chart/DefineChord";

/* Components */
import LyricLine from "../lyric-line/LyricLine";
import PresentChord from "../chord-chart/PresentChord";
import ChordBoard from "../chord-chart/ChordBoard";

/* Util */
import { changeChordType } from "../../../util/changeChordType";

const LyricBoard = ({
  printRef,
  detectedChords,
  transposedChords,
  lyricBoard,
  loading,
  transposeLvl,
  isFlat,
  /* actions */
  showLyricBoard,
}) => {
  const { songTitle, artistName, capoFret, tuning, key } = useSelector(
    (state) => state.currentSongInfo
  );

  return (
    <section ref={printRef}>
      <div className="py-7 md:px-6 lg:px-10">
        {/* Song infos */}
        {showLyricBoard && (
          <div className="mb-8 flex flex-col font-secondary border-solid border-dark border-l-4 pl-3">
            <h1 className="text-2xl font-bold text-orange-400">{songTitle}</h1>

            <p>
              by <span className="text-dark font-bold">{artistName}</span>
            </p>
          </div>
        )}

        {/* Detected chords /  Capo */}
        {showLyricBoard && (
          <div className="flex container flex-wrap mx-auto justify-start gap-7 items-start font-secondary">
            <div>
              <span>Chords :</span>
              {detectedChords.length === 0 && (
                <span className="text-yellow-500 font-bold">
                  No chords detected.
                </span>
              )}
              {transposedChords.length > 0 && transposeLvl !== 0 ? (
                <div className=" flex flex-wrap text-base gap-x-5 font-medium">
                  {transposedChords.length > 0 &&
                    transposedChords.map((chord, index) => {
                      return (
                        <div key={chord}>
                          <p className="text-info min-w-[30px]">
                            {changeChordType(detectedChords[index], isFlat)}
                          </p>
                          <p className="text-success min-w-[30px]">
                            {changeChordType(chord, isFlat)}
                          </p>
                        </div>
                      );
                    })}
                </div>
              ) : (
                <div className=" flex flex-wrap text-base gap-x-5 font-medium">
                  {detectedChords.map((chord) => {
                    return (
                      <p className="text-info min-w-[30px]" key={chord}>
                        {changeChordType(chord, isFlat)}
                      </p>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="flex flex-col">
              Capo on :
              <span className="text-light-md font-bold">
                {capoFret === 0 || capoFret === "" || capoFret === undefined
                  ? "No capo"
                  : `${capoFret} fret`}
              </span>
            </div>

            <div className="flex flex-col">
              Tuning :
              <span className="text-light-md font-bold">
                {tuning === 0 || tuning === "" || tuning === undefined
                  ? "Standard"
                  : `${tuning}`}
              </span>
            </div>

            {!(key === 0 || key === "" || key === undefined || key === "---") && (
              <div className="flex flex-col">
                Key :<span className="text-light-md font-bold">{key}</span>
              </div>
            )}
          </div>
        )}


      </div>

      <PresentChord isFlat={isFlat} />

      {/* Loading grid-icon */}
      {loading && (
        <div className="container mx-auto h-96 w-full flex justify-center items-center">
          <Loading type="grid" width={50} height={50} fill="#1aa7ec" />
        </div>
      )}

      {/* Main Lyrics area */}
      {showLyricBoard && (
        <pre className="lyric-board min-h-[40vh] container mx-auto font-primary p-0 md:p-5 md:px-30 lg:px-48 overflow-x-auto">
          <div className="px-0 md:px-4 pb-5 shadow lyric-bg">
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
                    isFlat={isFlat}
                  />
                );
              })}
          </div>
        </pre>
      )}
    </section>
  );
};

export default LyricBoard;
