import React, { useRef, useState, useEffect, Fragment } from "react";
import ReactToPrint from "react-to-print";
import html2canvas from "html2canvas";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

/* Components */
import { InputLyric, LyricBoard } from "../../components/common";
import { Switch, Listbox, Transition } from "@headlessui/react";

/* Icons */
import {
  Pencil1Icon,
  FileIcon,
  ImageIcon,
  PlusIcon,
  MinusIcon,
  MixerHorizontalIcon,
  Cross1Icon,
  DoubleArrowDownIcon,
  CheckCircledIcon,
  CaretSortIcon
} from "@radix-ui/react-icons";

import { SharpSymbol, FlatSymbol } from "../../assets";

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
    printRef,
    isFlat,
    isPrinting,
    isSetting,
    showLyricBoard,
    currentBoard,
    /* actions */
    setInputLyric,
    handleSubmit,
    setTransposeLvl,
    handleTransposeDown,
    handleTransposeUp,
    setEditMode,
    handleCombineKey,
    setFormMessage,
    setIsFlat,
    setIsPrinting,
    setIsSetting,
    setCurrentBoard,
  } = Hook();

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
  const speedOfScroll = [
    { id: 1, name: "100", speed: 50000 },
    { id: 2, name: "200", speed: 60000 },
    { id: 3, name: "300", speed: 70000 },
    { id: 4, name: "400", speed: 80000 },
    { id: 5, name: "500", speed: 90000 },
    { id: 6, name: "600", speed: 100000 },
    { id: 7, name: "700", speed: 110000 },
    { id: 8, name: "800", speed: 500000 },
  ];
  const [selectedSpeed, setSelectedSpeed] = useState(speedOfScroll[0]);
  const [scrollSpeed, setScrollSpeed] = useState(selectedSpeed.speed);

  let ScrollLink = Scroll.Link;
  let scrollSpy = Scroll.scrollSpy;

  useEffect(() => {
    setScrollSpeed(selectedSpeed.speed);
  }, [selectedSpeed]);

  return (
    <>
      <main className="container min-h-screen mx-auto pb-20 lg:pb-10 px-3 pt-5">
        {(lyricBoard.length === 0 || editMode) && (
          <InputLyric
            inputLyric={inputLyric}
            textArea={textArea}
            formMessage={formMessage}
            currentBoard={currentBoard}
            /* actions */
            setInputLyric={setInputLyric}
            handleSubmit={handleSubmit}
            handleCombineKey={handleCombineKey}
          />
        )}

        {/* <h1 onClick={scrollToBottom}>To Bottom</h1> */}

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
              <div className="bg-gray-100 fixed bottom-5 right-5 p-5 rounded shadow">
                <button
                  onClick={() => setIsSetting(false)}
                  className="absolute -top-3 right-0 bg-red-500 text-white text-lg p-1 rounded-full"
                >
                  <Cross1Icon />
                </button>
                <div className="flex flex-col gap-y-3">
                  <div className="flex justify-between">
                    <ScrollLink
                      // activeClass={styles.nav_active}
                      to={"bottom_point"}
                      spy={true}
                      duration={scrollSpeed}
                      smooth={"linear"}
                    >
                      <button
                        onClick={() => setIsSetting(false)}
                        className="cursor-pointer border rounded-md bg-white shadow flex gap-x-1 p-2 justify-center items-center text-sm font-secondary text-info"
                      >
                        <DoubleArrowDownIcon />
                        <span>Auto Scroll</span>
                      </button>
                    </ScrollLink>

                    <Listbox value={selectedSpeed} onChange={setSelectedSpeed}>
                      <div className="relative">
                        <Listbox.Button className="relative w-full rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md cursor-pointer focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                          <span className="block truncate">
                            {selectedSpeed.name}
                          </span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <CaretSortIcon/>
                          </span>
                        </Listbox.Button>
                        <Transition
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute z-50 bottom-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {speedOfScroll.map((speed, index) => (
                              <Listbox.Option
                                key={index}
                                className={({ active }) =>
                                  `relative select-none py-2 px-2 cursor-pointer ${
                                    active
                                      ? "bg-amber-100 text-amber-900"
                                      : "text-gray-900"
                                  }`
                                }
                                value={speed}
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${
                                        selected ? "font-medium" : "font-normal"
                                      }`}
                                    >
                                      {speed.name}
                                    </span>
                                    {selected ? (
                                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                        <CheckCircledIcon
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                        />
                                      </span>
                                    ) : null}
                                  </>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </Listbox>
                  </div>

                  <div className="flex justify-center items-center">
                    <span className="w-10 h-10 flex justify-center items-center">
                      <img className="" src={FlatSymbol} alt="flat symbol" />
                    </span>
                    <Switch
                      checked={isFlat}
                      onChange={setIsFlat}
                      className={`${
                        !isFlat ? "bg-success" : "bg-info"
                      } relative inline-flex h-6 w-11 items-center rounded-full`}
                    >
                      <span className="sr-only">Enable notifications</span>
                      <span
                        className={`${
                          !isFlat ? "translate-x-6" : "translate-x-1"
                        } inline-block h-4 w-4 transform transition-all rounded-full bg-white`}
                      />
                    </Switch>
                    <span className="w-10 h-10 flex justify-center items-center">
                      <img className="" src={SharpSymbol} alt="sharp symbol" />
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
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
                      className="bg-blue-500 font-secondary flex justify-center text-white gap-x-2 py-2 px-2 rounded shadow text-sm"
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
