import React, { useEffect} from "react";
import { useSelector } from "react-redux";

/* Hook */
import Hook from "./hook.inputLyric";

const InputLyric = ({
    inputLyric,
    textArea,
    formMessage,
    currentBoard,
    /* actions */
    setInputLyric,
    handleSubmit,
    handleCombineKey,
}) => {

  const {
    register,
    errors,
    watch,
    trigger,
    setValue,
    currentInputtedLyric,
    /* action */
    megaFormSubmit,
  } = Hook(handleSubmit, currentBoard)

  const { songTitle, artistName, songInputLyric } = useSelector((state) => state.currentSongInfo);

  let formSongTitle = songTitle ? songTitle : currentBoard?.songTitle;
  let formArtistName = artistName ? artistName : currentBoard?.artistName;
  let formSongInputLyric = currentInputtedLyric ? currentInputtedLyric : inputLyric;

  console.log({formSongTitle, formArtistName})

  useEffect(() => {
    setValue("songTitle" , formSongTitle)
    setValue("artistName" , formArtistName)
    setInputLyric(formSongInputLyric);
  }, [currentInputtedLyric]);

  return (
    <>
      <form onSubmit={megaFormSubmit} className="container mt-5 mx-auto p-0 md:p-5 md:px-30 lg:px-48" >

        <div className="mb-12 flex gap-3 items-center flex-wrap">
          <div className="flex flex-col relative">
            <label className="text-sm" htmlFor="song-title">Song title:</label>
            <input className="primary-input" defaultValue={formSongTitle} type="text" id="song-title" name="song-title" {...register("songTitle", { required: true })} />
            {errors.songTitle && <span className="text-danger text-xs mt-2 absolute -bottom-5 left-0">*This field is required</span>}
          </div>

          <div className="flex flex-col relative">
            <label className="text-sm" htmlFor="artist-name">Artist name:</label>
            <input className="primary-input" defaultValue={formArtistName} type="text" id="artist-name" name="artist-name" {...register("artistName", { required: true })} />
            {errors.artistName && <span className="text-danger text-xs mt-2 absolute -bottom-5 left-0">*This field is required</span>}
          </div>
        </div>

        <div className="relative">
          <textarea
            className="lyric-input min-h-[500px] w-full bg-blue-50 bg-opacity-50 p-2 md:p-3 border-solid border-2 border-blue-100 focus:outline-none focus:border-blue-300 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
            // defaultValue={inputLyric}
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
            Ctrl + SPACE = Tab, at least a space between chords
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
