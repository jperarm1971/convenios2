import React from 'react';
import { Link } from "react-router-dom";
import "./LeftMenu.scss";
import Convenio from "../../assest/convenio.jpeg";



export default function LeftMenu() {
    return (
        <div className="left-menu">
          <img className="logo" src={Convenio} alt="Convenios" />
    
          <Link to="/">
            Inicio
          </Link>
          <Link to="/convenios">
             Convenios
          </Link>
          <Link to="/convenio" >
             Convenio
          </Link>
    
        
          
        </div>
      );
}
