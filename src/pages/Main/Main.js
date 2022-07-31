import React, { useRef, useState } from "react";
import Loading from "react-loading-components";
import ReactToPrint from "react-to-print";
import html2canvas from "html2canvas";

/* Components */
import LyricLine from "../../components/common/lyric-line/LyricLine";

import { Pencil1Icon, FileIcon, ImageIcon } from "@radix-ui/react-icons";

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
    matchesPos,
    loading,
    formMessage,
    /* actions */
    setInputLyric,
    handleSubmit,
    setTransposeLvl,
    handleTransposeDown,
    handleTransposeUp,
    setEditMode,
    handleCombineKey,
    setFormMessage,
  } = Hook();

  const printRef = useRef();
  const [isPrinting, setIsPrinting] = useState(false);

  const showLyricBoard = !loading && lyricBoard.length > 0 && !editMode;

  const handleDownloadImage = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL("image/png");
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      link.download = "image.png";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  return (
    <main className="mt-12 mb-24 mx-5 lg:mx-0">
      {(lyricBoard.length === 0 || editMode) && (
        <form className="container mx-auto" onSubmit={handleSubmit}>
          <div className="relative">
            <textarea
              className="lyric-input w-full bg-blue-50 bg-opacity-50 p-2 md:p-5 border-solid border-2 border-blue-100 focus:outline-none focus:border-blue-300 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
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
            <span className="absolute -top-4 left-2 text-xs text-gray-400">
              Ctrl + SPACE = Tab
            </span>

            {formMessage !== "" && (
              <span className="text-xs text-red-500">{formMessage}</span>
            )}
          </div>

          <button className=" bg-blue-600 rounded-md text-white py-2 px-4 mx-auto table my-5">
            Generate
          </button>
        </form>
      )}

      {/* Print area */}
      <section>
        {showLyricBoard && (
          <button
            onClick={() => setEditMode(true)}
            className="absolute top-40 right-16 bg-blue-500 text-white py-2 px-2 rounded shadow text-sm"
          >
            <Pencil1Icon />
          </button>
        )}

        <div ref={printRef}>
          <section className="">
            {showLyricBoard && (
              <div className="flex container mx-auto justify-start gap-x-7 items-center">
                <span>Chords :</span>
                {detectedChords.length === 0 && (
                  <span className="text-yellow-300">No chords detected.</span>
                )}
                {transposedChords.length > 0 && transposeLvl !== 0 ? (
                  <div className=" flex text-xl gap-x-5 font-medium">
                    {transposedChords.length > 0 &&
                      transposedChords.map((chord) => {
                        return (
                          <p className="text-blue-500" key={chord}>
                            {chord}
                          </p>
                        );
                      })}
                  </div>
                ) : (
                  <div className=" flex text-xl gap-x-5 font-medium">
                    {detectedChords.length > 0 &&
                      detectedChords.map((chord) => {
                        return (
                          <p className="text-blue-500" key={chord}>
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
            <pre className="lyric-board container mx-auto font-primary p-0 md:p-5 md:px-48 overflow-x-auto">
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
        </div>
      </section>

      {showLyricBoard && (
        <>
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

          <div className=" fixed bottom-5 right-5">
            <ReactToPrint
              onBeforePrint={() => setIsPrinting(true)}
              trigger={() => (
                <button className="bg-gray-800 text-sm text-white p-2 rounded flex justify-center items-center gap-x-2">
                  <span className="hidden md:block">Print</span>  <FileIcon />
                </button>
              )}
              content={() => printRef.current}
            />

            <button className="border-gray-800 hidden border text-sm text-gray-800 p-2 rounded flex justify-center items-center gap-x-2" type="button" onClick={handleDownloadImage}>
              Save <ImageIcon/>
            </button>
          </div>
        </>
      )}
    </main>
  );
};

export default Main;
