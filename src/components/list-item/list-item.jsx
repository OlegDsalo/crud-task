import React from 'react';
import { Grid, IconButton, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../../store/post/post";
import { useNavigate } from "react-router-dom";
import './list-item.css';


const ListItem = ({post}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector(state => state.auth.isAuth);

  const handleClick = () => {
    dispatch(deletePost(post.id));
  }

  const handleRedirect = () => {
    navigate(`/edit${ post.id }`)
  }


  return (
    <Grid container className='list-item' xs={12}
          sx={ {
      margin: '10px auto',
      width: 600,
      maxHeight: 300,
    } }>
      <Grid item xs={ 11 }>
        <Typography component="h1" variant="h5">
          { post.title }
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          { post.description }
        </Typography>
      </Grid>
      <Grid item xs={ 1 }>
        <IconButton
          aria-label="delete"
          size="medium"
          onClick={ handleClick }
          disabled={ !isAuth }
        >
          <DeleteIcon fontSize="inherit"/>
        </IconButton>
        <IconButton
          size='medium'
          onClick={ handleRedirect }
        >
          <EditIcon fontSize="inherit"/>
        </IconButton>
      </Grid>
    </Grid>
  )
    ;
};

export default ListItem;
