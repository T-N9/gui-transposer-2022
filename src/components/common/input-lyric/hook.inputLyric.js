import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { database } from "../../../firebase-config";
import { collection, addDoc } from "firebase/firestore";

/* actions */
import {
  sendSongTitle,
  sendArtistName,
} from "../../../store/currentSongInfoSlice";

const Hook = (formSubmit, currentBoard) => {
  const userId = localStorage.getItem("gui-userId");

  const boardDatabaseRef = collection(database, `gui-users/${userId}/boards`);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    setValue,
    formState: { errors },
  } = useForm();

  const currentInputtedLyric = currentBoard?.inputLyric?.join("\n");
  console.log({ currentInputtedLyric });

  const onSubmit = (data, e) => {
    formSubmit(e);
    // console.log({data})

    dispatch(sendSongTitle(data.songTitle));
    dispatch(sendArtistName(data.artistName));

    addDoc(boardDatabaseRef, {
      songTitle: data.songTitle,
      artistName: data.artistName,
      lyricInput: currentInputtedLyric,
    })
      .then(() => {
        alert("Song added");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const megaFormSubmit = handleSubmit(onSubmit);

  return {
    register,
    errors,
    watch,
    trigger,
    setValue,
    currentInputtedLyric,
    /* action */
    megaFormSubmit,
  };
};

export default Hook;
