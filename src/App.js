import React, { useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import { useStateProvider } from './utils/StateProvider';
import { reducerCases } from './utils/Constants';
import Spotify from './components/Spotify';

function App() {
  const [{ token }, dispatch] = useStateProvider();
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");
    if (token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];
      dispatch({ type: reducerCases.SET_TOKEN, token: token });
    }
  }, [token, dispatch]);
  return (
    <div>
      {token ? <Spotify /> : <Login />}
    </div>
  );
}

export default App;
