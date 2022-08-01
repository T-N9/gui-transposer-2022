import React from "react";
import Loading from "react-loading-components";

/* Components */
import LyricLine from "../lyric-line/LyricLine";

const LyricBoard = ({
  printRef,
  detectedChords,
  transposedChords,
  lyricBoard,
  loading,
  transposeLvl,
  /* actions */
  showLyricBoard,
}) => {
  return (
    <div ref={printRef}>
      <section className="py-7 md:px-6 lg:px-10">
        {showLyricBoard && (
          <div className="flex flex-col container mx-auto justify-start gap-x-7 items-start font-secondary">
            <span>Chords :</span>
            {detectedChords.length === 0 && (
              <span className="text-yellow-300">No chords detected.</span>
            )}
            {transposedChords.length > 0 && transposeLvl !== 0 ? (
              <div className=" flex text-base gap-x-5 font-medium">
                {transposedChords.length > 0 &&
                  transposedChords.map((chord, index) => {
                    return (
                      <div  key={chord}>
                        <p className="text-info min-w-[30px]">
                          {detectedChords[index]}
                        </p>
                        <p className="text-danger min-w-[30px]">
                          {chord}
                        </p>
                      </div>
                    );
                  })}
              </div>
            ) : (
              <div className=" flex text-base gap-x-5 font-medium">
                {detectedChords.map((chord) => {
                  return (
                    <p className="text-blue-500 min-w-[30px]" key={chord}>
                      {chord}
                    </p>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </section>

      {loading && (
        <div className="container mx-auto h-96 w-full flex justify-center items-center">
          <Loading type="grid" width={50} height={50} fill="#1aa7ec" />
        </div>
      )}
      {showLyricBoard && (
        <pre className="lyric-board container mx-auto font-primary p-0 md:p-5 md:px-30 lg:px-48 overflow-x-auto">
          <div className="px-4 pb-5 shadow">
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
          </div>
        </pre>
      )}
    </div>
  );
};

export default LyricBoard;
