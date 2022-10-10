import React, { Fragment } from "react";
import ReactToPrint from "react-to-print";
import { Switch, Listbox, Transition } from "@headlessui/react";

/* Icons */
import {
  Pencil1Icon,
  FileIcon,
  ImageIcon,
  PlusIcon,
  MinusIcon,
  Cross1Icon,
  DoubleArrowDownIcon,
  CheckCircledIcon,
  CaretSortIcon,
} from "@radix-ui/react-icons";

import { SharpSymbol, FlatSymbol } from "../../../assets";

/* Hook */
import Hook from "./hook.setting";

const Setting = ({
  isFlat,
  printRef,
  detectedChords,
  transposeLvl,
  selected,
  speedOfScroll,
  /* actions */
  setIsFlat,
  setIsSetting,
  setEditMode,
  setIsPrinting,
  setTransposeLvl,
  handleTransposeDown,
  handleTransposeUp,
  setSelected,
}) => {
  const {
    scrollSpeed,
    ScrollLink,
    /* actions */
    setScrollSpeed,
    handleDownloadImage,
  } = Hook(printRef, speedOfScroll, selected, setSelected);

  return (
    <div className="bg-gray-100 fixed bottom-5 right-5 p-5 rounded shadow">
      <button
        onClick={() => setIsSetting(false)}
        className="absolute -top-3 right-0 bg-danger text-white text-lg p-1 rounded-full"
      >
        <Cross1Icon />
      </button>
      <div className="flex flex-col gap-y-3">
        <div className="flex justify-between gap-x-1">
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

          <Listbox value={selected} onChange={setSelected}>
            <div className="relative">
              <Listbox.Button className="relative w-full rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md cursor-pointer focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block font-secondary truncate">
                  {selected}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <CaretSortIcon />
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
                        `relative select-none cursor-pointer ${
                          active
                            ? "bg-amber-100 text-amber-900"
                            : "text-gray-900"
                        }`
                      }
                      value={speed.name}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate font-secondary px-2 py-1 ${
                              selected
                                ? "font-medium bg-info text-white"
                                : "font-normal"
                            }`}
                          >
                            {speed.name}
                          </span>
                          {selected ? (
                            <span className="absolute right-3 inset-y-0 flex items-center text-white">
                              <CheckCircledIcon
                                className="h-4 w-4"
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
              <button className="bg-dark font-secondary text-sm text-white p-2 rounded flex justify-center items-center gap-x-2">
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
            disabled={transposeLvl === 0}
            className={`bg-white text-lg text-light-md shadow w-7 h-7 flex justify-center items-center rounded-full ${transposeLvl === 0 && 'opacity-30'}`}
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
            disabled={transposeLvl === 11}
            className={`bg-white text-lg text-light-md shadow w-7 h-7 flex justify-center items-center rounded-full ${transposeLvl === 11 && 'opacity-30'}`}
            onClick={handleTransposeUp}
          >
            <PlusIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Setting;
