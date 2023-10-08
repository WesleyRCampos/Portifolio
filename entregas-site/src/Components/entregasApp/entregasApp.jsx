import React from 'react';
import './entregasApp.css';
import icons8_caneta from "../Assets/icons8-caneta-48.png";
import icons8_lixo from "../Assets/icons8-lixo-48.png";


const entregasApp = () => {
  return (
    <div className='container'>
        <div className="topo">
            <input type="text" className="inputNovaEntrega" id="inputNovaEntrega" placeholder="adicione uma nova entrega"/>
            <button id="btnEntrega">
                <img src={icons8_caneta} alt=""/>     
            </button>
        </div>

        <ul id="ListaEntrega">
            <li>
                <span className="textEntrega">Entrega1</span>
                <div>
                    <button className="btnAcao">
                        <img src={icons8_caneta} alt=""/> 
                    </button>
                    <button className="btnAcao">
                        <img src={icons8_lixo} alt=""/> 
                    </button>
                </div>
            </li>
        </ul>
    </div>
   
  );
    
};

export default entregasApp;