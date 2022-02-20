import React, {useState, useEffect} from 'react';
import Routing from './Rutas/Routing';
import { ToastContainer } from "react-toastify";
import { AuthContext } from './utils/context';
import {isUserLoggedApi} from "./api/auth";
import './App.scss';



export default function App() {
  
  const[user, setUser]=useState("josue");
  const [refreshCheckLogin, setRefreshCheckLogin] = useState(false);

  useEffect(() => {
    //setUser(isUserLoggedApi());
    setUser("josue");
    setRefreshCheckLogin(false);
  }, [refreshCheckLogin])


  return (
    <AuthContext.Provider value={user}>
    {user ? 
    (
      <Routing setRefreshCheckLogin={setRefreshCheckLogin}/>
    )
    :
    (
        <h2>Pagina de login</h2>
    )
    }
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
    />
    </AuthContext.Provider>
  );
}
