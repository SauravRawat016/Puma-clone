import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./login";
import LogoutButton from "./logout";
import Profile from "./proflie";
const Log = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

 if(isAuthenticated)return(
    <div>
        <Profile/>
        <LogoutButton/>
      </div>)
    else{
        return(<div><LoginButton/></div>)
    }
    
  
};

export default Log;