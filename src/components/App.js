import React, {useState} from 'react';
import { Router } from 'react-router-dom';
import AppRouter from "components/Router"
import {authService} from "myBase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return <>
    <AppRouter isLoggedIn={isLoggedIn} />;
    <footer>&copy; Nwitter {new Date().getFullYear()}</footer>
  </>
  
}

export default App;
