import React  from 'react';
import { Controller, useForm, useFormState } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextField, Typography } from "@mui/material";
import { descriptionValidation, titleValidation } from "../add-page/validation";
import { useParams } from "react-router-dom";
import { editPost, getPost } from "../../store/post/post";
import { useNavigate } from "react-router-dom";
import './edit-page.css'

const EditPage = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate();
    dispatch(getPost(Number(id)));

    const post = useSelector(state => state.post.singlePost);

    const {handleSubmit, control} = useForm({
      defaultValues: {
        title: post.title,
        description: post.description,
      }
    });
    const {errors} = useFormState({control});

    const onSubmit = (data) => {
      const editedPost = {...data, id: Number(id)};
      dispatch(editPost(editedPost));
      navigate('/list');
    };

    return (
      <div className='edit-page'>
        <Typography component="h1" variant="h5">
          Edit post
        </Typography>
        <form
          className='edit-form'
          onSubmit={ handleSubmit(onSubmit) }
        >
          <Controller
            control={ control }
            rules={ titleValidation }
            name="title"
            render={ ({field}) => (
              <TextField
                label="title"
                margin='normal'

                size='small'
                fullWidth
                value={ field.value }
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
                label="description"
                margin='normal'
                size='small'
                fullWidth
                value={ field.value }
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
          >Edit</Button>
        </form>
      </div>
    );
  }
;

export default EditPage;
