import {useState} from 'react'

const RotaForm = ({ addRota }) => {
  const [value, setValue] = useState ("");
  const [data, setData] = useState ("");
  const [ponto_inicial, setInicio] = useState ("");
  const [ponto_final, setFinal] = useState ("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !data || !ponto_inicial || !ponto_final) return;
    addRota(value, data, ponto_inicial, ponto_final);
    setValue("");
    setData("");
    setFinal("");
    setInicio("");
  };
   

  return (
    <div className="RotaForm">
      <h2>Nova Entrega:</h2>
      <form onSubmit={handleSubmit} className='Form'>
        <input type="text" placeholder="digite seu Nome..." value={value} onChange={(e) => setValue(e.target.value)} />
        <input type="date" placeholder="digite a data..." value={data} onChange={(e) => setData(e.target.value)} />
        <input type="text" placeholder="digite a cidade de partida..." value={ponto_inicial} onChange={(e) => setInicio(e.target.value)} />
        <input type="text" placeholder="digite a cidade de destino..." value={ponto_final} onChange={(e) => setFinal(e.target.value)} />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  )
}

export default RotaForm;

