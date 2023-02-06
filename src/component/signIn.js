import React, { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GoogleLogin from 'react-google-login';
import { GoogleOAuthProvider } from '@react-oauth/google'
// import { GoogleLogin } from '@react-oauth/google'
import styled from 'styled-components';
import {FcGoogle} from "react-icons/fc"

const theme = createTheme();
const clientId = "13841580112-mb1fbkcfmnimssovjsvgnkfsvea0dmu8.apps.googleusercontent.com";

export default function useSignIn() { //서버에 전송해서 로그인 가능하도록 코드 수정 필요
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const onSuccess = async(response) => {
    const {googleId, profileObj : {email, name}} = response;
    console.log(response);
    // await onGoogleLogin {
    //   // 구글 로그인 성공시 서버에 전달할 데이터
    // }
  }

  const onFailure = (error) => {
    console.log(error);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
              <Grid item>
                <GoogleOAuthProvider clientId={clientId}>
                  <GoogleLogin
                    clientId={clientId}
                    responseType={"id_token"}
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    render={(renderProps) => (
                      <GoogleButton onClick={renderProps.onClick}>
                        <GoogleWrapper>
                          <FcGoogle style={{width:"25px", height:"25px"}}/>
                          <GoogleText>구글로 시작하기</GoogleText>
                        </GoogleWrapper>
                      </GoogleButton>
                      )}
                  ></GoogleLogin>
                </GoogleOAuthProvider>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

const GoogleButton = styled.button`
  width: 400px;
  height: 47px;
  padding: 9px 84px 9px 21px;
  background: none;
  display: flex;
  align-items: center;
  border: 1.5px solid #d3d3d3;
  margin-top: 20px;
`;

const GoogleWrapper = styled.div`
  width: 238px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;


const GoogleText = styled.span`
  font-weight: 400px;
  font-size: 14px;
  display: flex;
  align-items: center;
  color: black;
  font-size: 15px;
  font-weight: 500;
`;