import React from 'react';
import { map } from "lodash";

import "./ListConvenios.scss";

export default function ListConvenios(props) {
    const{convenios}=props;
    console.log(convenios);

    return (
        <div className="list-tweets">
          {map(convenios, (convenio, index) => (
            <Convenio key={index} convenio={convenio} />
          ))}
        </div>
      );
    }
    
    function Convenio(props) {
      const { convenio } = props;
      console.log("convenio:"+convenio);
    
      return (
        <div className="tweet">
          <div>
              Convenio detalle
          </div>
        </div>
      );
    }