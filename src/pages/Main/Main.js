import React, { useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import html2canvas from "html2canvas";

/* Components */
import { InputLyric, LyricBoard } from "../../components/common";

/* Icons */
import {
  Pencil1Icon,
  FileIcon,
  ImageIcon,
  PlusIcon,
  MinusIcon,
  MixerHorizontalIcon,
  Cross1Icon
} from "@radix-ui/react-icons";

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
  const [isSetting, setIsSetting] = useState(true);

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
        <InputLyric
          inputLyric={inputLyric}
          textArea={textArea}
          formMessage={formMessage}
          /* actions */
          setInputLyric={setInputLyric}
          handleSubmit={handleSubmit}
          handleCombineKey={handleCombineKey}
        />
      )}

      {/* Print area */}
      <section>
        <LyricBoard
          printRef={printRef}
          detectedChords={detectedChords}
          transposedChords={transposedChords}
          lyricBoard={lyricBoard}
          loading={loading}
          transposeLvl={transposeLvl}
          /* actions */
          showLyricBoard={showLyricBoard}
        />
      </section>

      {showLyricBoard && (
        <>
          {isSetting ? (
            <div className="bg-gray-100 fixed bottom-5 right-5 p-5 rounded shadow">
              <button onClick={()=> setIsSetting(false)} className="absolute -top-3 right-0 bg-red-500 text-white text-lg p-1 rounded-full">
                <Cross1Icon/>
              </button>
              <div className="flex flex-col gap-y-3">
                <div className="flex justify-between">
                  <ReactToPrint
                    onBeforePrint={() => setIsPrinting(true)}
                    trigger={() => (
                      <button className="bg-gray-800 font-secondary text-sm text-white p-2 rounded flex justify-center items-center gap-x-2">
                        Print <FileIcon />
                      </button>
                    )}
                    content={() => printRef.current}
                  />

                  <button
                    className="border-gray-800 hidden border text-sm text-gray-800 p-2 rounded flex justify-center items-center gap-x-2"
                    type="button"
                    onClick={handleDownloadImage}
                  >
                    Save <ImageIcon />
                  </button>

                  <button
                    onClick={() => setEditMode(true)}
                    className="bg-blue-500 font-secondary flex text-white gap-x-2 py-2 px-2 rounded shadow text-sm"
                  >
                    Edit <Pencil1Icon />
                  </button>
                </div>

                <div
                  className={`mx-auto relative inline-flex items-center justify-center gap-x-4 shadow-md px-5 py-3 rounded-lg bg-white ${
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
                    <MinusIcon />
                  </button>
                  <button
                    className="border flex border-solid font-secondary text-base border-gray-50 px-2 rounded"
                    onClick={() => setTransposeLvl(0)}
                  >
                    Reset
                  </button>
                  <button
                    className="bg-white text-lg shadow w-7 h-7 flex justify-center items-center rounded-full"
                    onClick={handleTransposeUp}
                  >
                    <PlusIcon />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <button className="bg-white border-2 border-blue-500 shadow-md text-blue-500 text-xl fixed bottom-5 right-5 p-3 rounded shadow" onClick={() => setIsSetting(true)}>
              <MixerHorizontalIcon className="w-5 h-5" />
            </button>
          )}
        </>
      )}
    </main>
  );
};

export default Main;
