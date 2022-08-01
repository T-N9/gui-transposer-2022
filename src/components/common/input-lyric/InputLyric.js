import React from "react";

const InputLyric = ({
    inputLyric,
    textArea,
    formMessage,
    /* actions */
    setInputLyric,
    handleSubmit,
    handleCombineKey,
}) => {
  return (
    <>
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

        <button type="submit" className=" bg-blue-600 rounded-md text-white py-2 px-4 mx-auto table my-5">
          Generate
        </button>
      </form>
    </>
  );
};

export default InputLyric;
