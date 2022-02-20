import React from 'react';
import {Button} from "react-bootstrap";
import BasicLayout from '../../Layout/BasicLayout';
import { toast } from 'react-toastify';
import "./Home.scss";

export default function Home() {
  return (
    <BasicLayout className="home">
      <h2>Estamos en la home</h2>
      <Button 
            variant="primary" 
            onClick={()=> {
              toast.warning("Esto es un toast");  
            }}
      >
        boton para toast
      </Button>
  </BasicLayout>
  );
}
