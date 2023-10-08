import React from "react";

const Rota = ({ rota, removeRota }) => {
  return (
    <div className="rota">
          <div className="content">
            <p>{rota.nome}</p>
            <p className="data">{rota.data}</p>
            <div className="distino">
              <p className="trajeto">{rota.ponto_inicial}</p>
              <p className="trajeto">{rota.ponto_final}</p>
            </div>
          </div>
          <div>
            <button className="map">mapa</button>
            <button className="delete" onClick={() => removeRota(rota.id)}>x</button>
          </div>
        </div>
  );
};

export default Rota;

