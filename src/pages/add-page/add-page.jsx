import React from 'react';
import { Button, TextField, Typography } from "@mui/material";
import './add-page.css'
import { Controller, useForm, useFormState } from "react-hook-form";

import { descriptionValidation, titleValidation } from "./validation";
import { useDispatch } from "react-redux";
import { addPost } from "../../store/post/post";
import { useNavigate } from "react-router-dom";

const AddPage = () => {
  const {handleSubmit, control} = useForm();
  const {errors} = useFormState({control});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const max = 100;
    const min = 2;
    const genereteId = Math.floor(Math.random() * (max - min) + min);
    const newPost = {...data, id: genereteId}
    dispatch(addPost(newPost));
    navigate('/list')
  };

  return (
    <div className='add-page'>
      <Typography component="h1" variant="h5">
        Add post
      </Typography>
      <form
        className='add-form'
        onSubmit={ handleSubmit(onSubmit) }
      >
        <Controller
          control={ control }
          rules={ titleValidation }
          name="title"
          render={ ({field}) => (
            <TextField
              label="Title"
              margin='normal'
              size='small'
              fullWidth
              onChange={ (e => field.onChange(e)) }
              error={ errors.title?.message }
              helperText={ errors.title?.message }
              maxRows={ 2 }
            />
          ) }
        />
        <Controller
          control={ control }
          name="description"
          rules={ descriptionValidation }
          render={ ({field}) => (
            <TextField
              label="Description"
              margin='normal'
              size='small'
              fullWidth
              onChange={ (e => field.onChange(e)) }
              error={ errors.description?.message }
              helperText={ errors.description?.message }
              multiline
              maxRows={ 7 }
            />
          ) }
        />
        <Button
          type='submit'
          variant='contained'
          fullWidth={ true }
          disableElevation={ true }
          sx={ {
            marginTop: 2
          } }
        >ADD</Button>
      </form>
    </div>
  );
};

export default AddPage;
