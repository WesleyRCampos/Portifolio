import { useState } from "react";


import Rota from './components/Rota';

import RotaForm from "./components/RotaForm";

import MapPage from "./components/MapPage";

import './App.css';



function App() {
  const [rotas, setRotas, ] = useState([
    {
    id: 1,
    nome: "padrao",
    data:"xx/xx/xxxx",
    ponto_inicial: "xxxx",
    ponto_final: "xxxx",
    },
    
    
  ]);

  const addRota = (nome, data, ponto_inicial, ponto_final) => {
    const newRotas = [
      ...rotas,
      {
        id: Math.floor(Math.random() * 10000),
        nome,
        data,
        ponto_inicial,
        ponto_final,
      },
    ];
    setRotas(newRotas);
  };

  const removeRota = (id) => {
    const newRotas = [...rotas]
    const filteredRota = newRotas.filter(rota => rota.id !== id ? rota : null);
    setRotas(filteredRota);
  };
  
  const [ map, setMap] =useState([]);

  
  

  return (
  <div className="app">
    <h1>rotas</h1>
    <div className="container">
    <div className="pag1 ">
    <div className="rotas-lista">
      {rotas.map((rota) => (
       <Rota key={rota.id} rota={rota} removeRota={removeRota}/>
      ))}
    </div>
    <div >
    <RotaForm addRota={addRota}/>
    </div>
    </div>
    <div className="Map-lista">
    <MapPage />
    </div>
    </div>
    </div>
 
  );
}

export default App;
