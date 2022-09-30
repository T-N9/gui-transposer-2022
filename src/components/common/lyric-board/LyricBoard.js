import React from "react";
import Loading from "react-loading-components";
import { useSelector } from "react-redux";

import DefineChord from "../../common/chord-chart/DefineChord";

/* Components */
import LyricLine from "../lyric-line/LyricLine";

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
  const { songTitle, artistName } = useSelector(
    (state) => state.currentSongInfo
  );

  console.log({ detectedChords });

  return (
    <div ref={printRef}>
      <section className="py-7 md:px-6 lg:px-10">
        {showLyricBoard && (
          <div className="mb-8 flex flex-col font-secondary border-solid border-dark border-l-4 pl-3">
            <h1 className="text-2xl font-bold text-orange-400">{songTitle}</h1>

            <p>
              by <span className="text-dark font-bold">{artistName}</span>
            </p>
          </div>
        )}

        {showLyricBoard && (
          <div className="flex flex-col container mx-auto justify-start gap-x-7 items-start font-secondary">
            <span>Chords :</span>
            {detectedChords.length === 0 && (
              <span className="text-yellow-300">No chords detected.</span>
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
                        <p className="text-danger min-w-[30px]">
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
                    <p className="text-blue-500 min-w-[30px]" key={chord}>
                      {changeChordType(chord, isFlat)}
                    </p>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {showLyricBoard && (
          <>
            <div className="flex gap-3 fixed top-0 left-[50%] translate-x-[-50%] bg-white p-5 shadow flex-wrap">
              {detectedChords.map((chord, index) => {
                return <DefineChord key={index} chord={chord} />;
              })}
            </div>
          </>
        )}
      </section>

      {loading && (
        <div className="container mx-auto h-96 w-full flex justify-center items-center">
          <Loading type="grid" width={50} height={50} fill="#1aa7ec" />
        </div>
      )}
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
    </div>
  );
};

export default LyricBoard;
