import React, {useEffect} from "react";
import {
  animateScroll as scroll,
  Element,
} from "react-scroll";

/* Components */
import { Setting, InputLyric, LyricBoard } from "../../components/common";

/* Icons */
import { MixerHorizontalIcon } from "@radix-ui/react-icons";

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
    // matchesPos,
    loading,
    formMessage,
    printRef,
    isFlat,
    // isPrinting,
    isSetting,
    showLyricBoard,
    currentBoard,
    selected,
    speedOfScroll,
    boardId,
    /* actions */
    setInputLyric,
    handleSubmit,
    setTransposeLvl,
    handleTransposeDown,
    handleTransposeUp,
    setEditMode,
    handleCombineKey,
    // setFormMessage,
    setIsFlat,
    setIsPrinting,
    setIsSetting,
    // setCurrentBoard,
    setSelected
  } = Hook();

  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <>
      <main className="container min-h-screen mx-auto pb-20 lg:pb-10 px-3 pt-5">
        {/* Input Board Data form */}
        {(lyricBoard.length === 0 || editMode) && (
          <InputLyric
            inputLyric={inputLyric}
            textArea={textArea}
            formMessage={formMessage}
            currentBoard={currentBoard}
            boardId= { boardId}
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
            isFlat={isFlat}
            /* actions */
            showLyricBoard={showLyricBoard}
          />
        </section>

        {showLyricBoard && (
          <>
            {isSetting ? (
              <>
                <Setting
                  isFlat={isFlat}
                  printRef = {printRef}
                  detectedChords = {detectedChords}
                  transposeLvl = {transposeLvl}
                  selected = {selected}
                  speedOfScroll = {speedOfScroll}
                  /* actions */
                  setIsFlat={setIsFlat}
                  setIsSetting={setIsSetting}
                  setEditMode = {setEditMode}
                  setIsPrinting={setIsPrinting}
                  setTransposeLvl = {setTransposeLvl}
                  handleTransposeDown = {handleTransposeDown}
                  handleTransposeUp = {handleTransposeUp}
                  setSelected = {setSelected}
                />
              </>
            ) : (
              <button
                className="bg-white border-2 border-blue-500 shadow-md text-blue-500 text-xl fixed bottom-5 right-5 p-3 rounded "
                onClick={() => setIsSetting(true)}
              >
                <MixerHorizontalIcon className="w-5 h-5" />
              </button>
            )}
          </>
        )}
      </main>
      <Element name="bottom_point"></Element>
    </>
  );
};

export default Main;
