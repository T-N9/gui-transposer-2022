import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

/* actions */
import { sendSongTile , sendArtistName } from '../../../store/currentSongInfoSlice'

const Hook = (formSubmit) => {

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    formSubmit(e);
    console.log({data})

    dispatch(sendSongTile(data.songTitle));
    dispatch(sendArtistName(data.artistName));
  };

  const megaFormSubmit = handleSubmit(onSubmit);

  return {
    register,
    errors,

    /* action */
    megaFormSubmit,
  };
};

export default Hook;
