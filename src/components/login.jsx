import React from "react";
import Button from '@mui/material/Button';
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect} = useAuth0();

  return (<div><Button variant="contained" onClick={() => loginWithRedirect()}   sx={{background:'#000000'}}>Log In</Button></div>);
};

export default LoginButton;