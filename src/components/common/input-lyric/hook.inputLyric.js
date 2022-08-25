import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

/* Firebase assets */
import { database } from "../../../firebase-config";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

/* actions */
import {
  sendSongTitle,
  sendArtistName,
} from "../../../store/currentSongInfoSlice";
import { setStartLoading, setStopLoading } from "../../../store/generalSlice";

/* Custom Hook */
import HookFirebaseAssets from "../../../hook.firebaseAssets";

const Hook = (formSubmit, currentBoard, inputLyric, setInputLyric, boardId) => {
  const navigate = useNavigate();

  const userId = localStorage.getItem("gui-userId");
  const isAdmin = localStorage.getItem("interactingAdmin");

  const [currentBoardWithId, setCurrentBoardWithId] = useState(null);
  const [isNewBoard, setIsNewBoard] = useState(true);

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
    if (boardId.length > 4) {
      dispatch(setStartLoading());
      getDocs(publicBoardsCollection)
        .then((item) => {
          let currentBoardWithIdRef = item.docs.filter((board) => {
            return board.id === boardId;
          });

          let toStateRef = currentBoardWithIdRef.map((item) => item.data());

          setCurrentBoardWithId(toStateRef[0]);
          dispatch(setStopLoading());
        })
        .catch((err) => {
          alert(err.message);
          dispatch(setStopLoading());
        });
      setIsNewBoard(false);
    } else {
      setIsNewBoard(true);
    }
  }, []);

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

  const handleDeletingBoard = () => {
    // dispatch(setStartLoading());
    deleteDoc(doc(database, "public-boards", boardId))
      .then(() => {
        fetchPublicBoardList(true);
        navigate("/");
        // alert("Board is deleted");
      })
      .catch((err) => alert(err.message));
  };

  const handleUpdatingBoard = () => {
    dispatch(setStartLoading());
    updateDoc(doc(database, "public-boards", boardId), {
      songTitle: watch("songTitle"),
      artistName: watch("artistName"),
      lyricInput: inputtedPublicLyric,
    })
      .then(() => {
        dispatch(setStopLoading());
      })
      .catch((err) => {
        dispatch(setStopLoading());
        alert(err.message);
      });
  };

  const { songTitle, artistName, songInputLyric } = useSelector(
    (state) => state.currentSongInfo
  );

  let formSongTitle = songTitle ? songTitle : currentBoardWithId?.songTitle;
  let formArtistName = artistName ? artistName : currentBoardWithId?.artistName;
  let formSongInputLyric = currentInputtedLyric
    ? currentInputtedLyric
    : inputLyric;

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
    isNewBoard,
    isAdmin,
    /* action */
    megaFormSubmit,
    handleAddingBoardList,
    handleDeletingBoard,
    handleUpdatingBoard,
  };
};

export default Hook;
