import React, {useEffect, useState} from 'react';
import { Router } from 'react-router-dom';
import AppRouter from "components/Router"
import {authService} from "myBase";



function App() {
  
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if(user){
        setIsLoggedIn(true);
      }else {
        setIsLoggedIn(false);
      }
        setInit(true);
    });
  }, [])
  setInterval(() => {
    console.log(authService.currentUser)
  },2000)
  return <>
    {init ?<AppRouter isLoggedIn={isLoggedIn} /> : "Initalizing......"}
    <footer>&copy; Nwitter {new Date().getFullYear()}</footer>
  </>
  
}

export default App;
