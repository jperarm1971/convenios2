import React, {useState,useEffect} from 'react';
import BasicLayout from '../../Layout/BasicLayout';
import {getConveniosApi} from "../../api/convenios";
import ListConvenios from '../../components/ListConvenios';
import "./Convenios.scss";

export default function Convenios() {
  const [convenios, setConvenios] = useState(null);
  

  useEffect(() => {
    getConveniosApi()
      .then((response) => {
        setConvenios(response);
      })
      .catch(() => {
        setConvenios([]);
      });
  },[ ]);

  return (
    <BasicLayout className="home">
    <h2>Estamos mostrando el listado de convenios</h2>
    <div className="user__tweets">
        <h3>Tweets</h3>
        <ListConvenios convenios={convenios} />
      </div>
</BasicLayout>
    );
}
