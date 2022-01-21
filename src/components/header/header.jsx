import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar } from "@mui/material";
import './header.css'
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/auth/auth";

const Header = () => {
  const isAuth = useSelector(state => state.auth.isAuth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {

    dispatch(logout());
    navigate('/login')
  }
  return (
    <AppBar>
      <Toolbar className='header'>
        <Link to='/add'>Add</Link>
        <Link to='/list'>List</Link>
        { !isAuth ? <Link to='/login'>Login</Link>:
          <span onClick={ handleClick }>Logout</span> }
      </Toolbar>
    </AppBar>
  );
};

export default Header;
