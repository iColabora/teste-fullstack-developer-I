import React, { useEffect, useState } from "react";
import api from "./services/Api";
import './styles/styles.scss'

export default function App() {
  const [atendimento, setAtendimento] = useState([]);
  const [isShow, setShow] = useState(false);

  const handleClick = () => {
    setShow(!isShow)
  }

  useEffect(() => {
    api
      .get()
      .then((response) => {
        console.log(response.data[0].DRILLDOWN[0].SLA)

        setAtendimento(response.data)
      })

      .catch((err) => {
        console.error(`Erro na Conexão com a API ${err}`)
      })
  }, [])

  return (
    <div>
      <table>
        <thead>
          <tr id="titulo">
            <th id="tarefa">Tarefa</th>
            <th class="resultados">Vencido</th>
            <th class="indicadores">D0</th>
            <th class="indicadores">D1</th>
            <th class="indicadores">D2</th>
            <th class="indicadores">D3</th>
            <th class="resultados">Total</th>
          </tr>
        </thead>
        <tbody>

          {atendimento.map((dado) => {
            return (
              <>
                <tr 
                  id="result-celula"
                  onClick={handleClick}>
                  <td
                    id="result-tarefa"
                    key={dado.TAREFA}>{dado.TAREFA}</td>
                  <td
                    class="result-totais" 
                    key={dado.VENCIDO}>{dado.VENCIDO}</td>
                  <td 
                  id="D0"
                  key={dado.D0}>{dado.D0}</td>
                  <td 
                  id="D1"
                  key={dado.D1}>{dado.D1}</td>
                  <td 
                  id="D2"
                  key={dado.D2}>{dado.D2}</td>
                  <td 
                  id="D3"
                  key={dado.D3}>{dado.D3}</td>
                  <td 
                  class="result-totais"
                  key={dado.TOTAL}>{dado.TOTAL}</td>
                </tr>
                {isShow ?
                  <>
                    {dado.DRILLDOWN.map((sla) => {
                      return <tr>
                          <td 
                          id='info'
                          key={sla.SLA}>SLA: {sla.SLA}</td>
                      </tr>

                        
                    })}
                  </> : <></>}

              </>
            )
          })}

        </tbody>
      </table>
    </div>
  )
}
