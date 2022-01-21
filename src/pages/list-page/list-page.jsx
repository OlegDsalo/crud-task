import React from 'react';
import { useSelector } from "react-redux";
import ListItem from "../../components/list-item/list-item";
import './list-page.css'
import { Typography } from "@mui/material";

const ListPage = () => {
  const posts = useSelector(state => state.post.posts);

  return (
    <div className='list-page'>
      <Typography variant="h2" align='center' gutterBottom component="div"> Post</Typography>
      { posts.map(post => <ListItem post={ post } key={ post.id }/>) }
    </div>
  );
};

export default ListPage;
