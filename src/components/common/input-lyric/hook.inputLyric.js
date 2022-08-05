import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

/* actions */
import { sendSongTitle , sendArtistName } from '../../../store/currentSongInfoSlice'

const Hook = (formSubmit, currentBoard) => {

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    setValue,
    formState: { errors },
  } = useForm();

  // useEffect(() => {
  //   trigger("songTitle")
  //   trigger("artistName")
  // }, []);

  const onSubmit = (data, e) => {
    formSubmit(e);
    console.log({data})

    dispatch(sendSongTitle(data.songTitle));
    dispatch(sendArtistName(data.artistName));
  };

  const megaFormSubmit = handleSubmit(onSubmit);

  const currentInputtedLyric = currentBoard?.inputLyric?.join('\n');

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
