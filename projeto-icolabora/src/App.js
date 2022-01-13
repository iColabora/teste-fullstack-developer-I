import React, { useEffect, useState } from "react";
import api from "./services/Api";
import './styles/styles.scss'
import Collapsible from 'react-collapsible'

export default function App() {
  const [atendimento, setAtendimento] = useState([]);
  const [isShow, setShow] = useState(false);

  /*Click para mostrar os detalhes*/
  const handleClick = () => {
    setShow(!isShow)     
  }

  function Detalhes(props) {
    const { details } = props;

    return (
      <tr>
         <p>{details.SLA}</p>
      </tr>
     
    )
  }


  /*Chamada da API e passando para setAtendimento*/
  useEffect(() => {
    api
      .get()
      .then((response) => {setAtendimento(response.data)})
      .catch((err) => {
        console.error(`Erro na Conexão com a API ${err}`)
      })
  }, [])


  /*Construção da tabela*/
  return (
    <div>
      <table>
        <thead>
          <tr id="titulo">
            <th id="tarefa">Tarefa</th>
            <th className="resultados">Vencido</th>
            <th className="indicadores">D0</th>
            <th className="indicadores">D1</th>
            <th className="indicadores">D2</th>
            <th className="indicadores">D3</th>
            <th className="resultados">Total</th>
          </tr>
        </thead>
        <tbody>
         {/*Usei um Map para percorrer o JSON e organizar dentro da tabela*/}
          {atendimento.map((dado, id) => (
            <>
              <tr key={id} id={`result-${id+1}`} onClick={Detalhes}>
                <td onClick={handleClick} id="result-tarefa">{dado.TAREFA}</td>
                <td className="result-totais">{dado.VENCIDO}</td>
                <td id="D0">{dado.D0}</td>
                <td id="D1">{dado.D1}</td>
                <td id="D2">{dado.D2}</td>
                <td id="D3">{dado.D3}</td>
                <td className="result-totais">{dado.TOTAL}</td>
              </tr>
              {/*Para conseguir abrir os detalhes, criei uma Condição Ternaria,
      se for ao clicar na tarefa ira mudar isShow para True e mostra os detalhes, e false esconde
      os detalhes, porem não consegui deixar para mostrar os detalhes por tarefa
    */}
              {isShow ?
                <>
                  {dado.DRILLDOWN.map((sla) => {
                    return (
                      <Detalhes details={sla} />
                    )
                  })}
                </> : <></>}

            </>
          ))}
        </tbody>
      </table>
    </div>
  )
}
