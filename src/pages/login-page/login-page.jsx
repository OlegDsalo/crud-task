import React from 'react';
import { Button, TextField, Typography } from "@mui/material";
import { useForm, Controller, useFormState } from "react-hook-form";
import './login-page.css'
import { loginValidation, passwordValidation } from "./validation";
import { useDispatch } from "react-redux";
import { login } from "../../store/auth/auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const {handleSubmit, control} = useForm();
  const {errors} = useFormState({control});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data, 'data');
    dispatch(login());
    navigate('/list');
  }

  return (
    <div className='login-page'>
      <Typography component="h1" variant="h5">
        Login
      </Typography>
      <form
        className='login-form'
        onSubmit={ handleSubmit(onSubmit) }
      >
        <Controller
          control={ control }
          rules={ loginValidation }
          name="login"
          render={ ({field}) => (
            <TextField
              label="Login"
              margin='normal'
              size='small'
              fullWidth
              onChange={ (e => field.onChange(e)) }
              error={ errors.login?.message }
              helperText={ errors.login?.message }
            />
          ) }
        />
        <Controller
          control={ control }
          name="password"
          rules={ passwordValidation }
          render={ ({field}) => (
            <TextField
              label="Password"
              margin='normal'
              size='small'
              fullWidth
              onChange={ (e => field.onChange(e)) }
              error={ errors.password?.message }
              helperText={ errors.password?.message }
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
        >PUSH</Button>
      </form>
    </div>
  );
};

export default LoginPage;
