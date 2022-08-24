import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { database } from "../../../firebase-config";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

/* actions */
import {
  sendSongTitle,
  sendArtistName,
} from "../../../store/currentSongInfoSlice";

/* Custom Hook */
import HookFirebaseAssets from "../../../hook.firebaseAssets";

const Hook = (formSubmit, currentBoard, inputLyric, setInputLyric, boardId) => {
  const userId = localStorage.getItem("gui-userId");
  const isAdmin = localStorage.getItem("interactingAdmin");

  const [currentBoardWithId, setCurrentBoardWithId] = useState(null);

  const { publicBoardsCollection, fetchPublicBoardList } = HookFirebaseAssets();
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

  const currentInputtedLyric = currentBoardWithId?.lyricInput?.join("\n");
  const inputtedPublicLyric = inputLyric.split("\n");

  const onSubmit = (data, e) => {
    formSubmit(e);

    dispatch(sendSongTitle(data.songTitle));
    dispatch(sendArtistName(data.artistName));
  };

  const megaFormSubmit = handleSubmit(onSubmit);

  useEffect(() => {
    boardId.length > 4 &&
      getDocs(publicBoardsCollection)
        .then((item) => {
          let currentBoardWithIdRef = item.docs.filter((board) => {
            return board.id === boardId;
          });

          let toStateRef = currentBoardWithIdRef.map((item) => item.data());

          setCurrentBoardWithId(toStateRef[0]);
        })
        .catch((err) => {
          alert(err.message);
        });
  }, []);

  console.log({ currentBoardWithId });

  const handleAddingBoardList = () => {
    if (isAdmin) {
      addDoc(publicBoardsCollection, {
        songTitle: watch("songTitle"),
        artistName: watch("artistName"),
        lyricInput: inputtedPublicLyric,
      })
        .then(() => {
          fetchPublicBoardList(true);
          // alert('Song added');
        })
        .catch((err) => {
          alert(err.message);
        });
    } else {
      addDoc(boardDatabaseRef, {
        songTitle: watch("songTitle"),
        artistName: watch("artistName"),
        lyricInput: inputtedPublicLyric,
      })
        .then(() => {
          alert("Song added");
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };

  const { songTitle, artistName, songInputLyric } = useSelector(
    (state) => state.currentSongInfo
  );

  let formSongTitle = songTitle ? songTitle : currentBoardWithId?.songTitle;
  let formArtistName = artistName ? artistName : currentBoardWithId?.artistName;
  let formSongInputLyric = currentInputtedLyric
    ? currentInputtedLyric
    : inputLyric;

  // console.log({formSongTitle, formArtistName})

  useEffect(() => {
    setValue("songTitle", formSongTitle);
    setValue("artistName", formArtistName);
    setInputLyric(formSongInputLyric);
  }, [currentInputtedLyric, currentBoardWithId]);

  return {
    register,
    errors,
    watch,
    trigger,
    setValue,
    currentInputtedLyric,
    formSongTitle,
    formArtistName,
    /* action */
    megaFormSubmit,
    handleAddingBoardList,
  };
};

export default Hook;
