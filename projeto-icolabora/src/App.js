import React, {  useEffect, useState} from "react";
import api from "./services/Api";




export default function App() {
  const [atendimento, setAtendimento] = useState([]);
  const [Sla, setSla] = useState([])

  useEffect(() => {
    api
    .get()
    .then((response) => {
      console.log(response.data[0].DRILLDOWN[0].SLA)
    
      setAtendimento(response.data)})
      
    .catch((err) => {
      console.error(`Erro na Conexão com a API ${err}`)
    })
  }, [])


  


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Tarefa</th>
            <th>Vencido</th>
            <th>D0</th>
            <th>D1</th>
            <th>D2</th>
            <th>D3</th>
            <th>Total</th>
            <th>Detalhes</th>
          </tr>
        </thead>
        <tbody>
        
            {atendimento.map((dado) => {
              return(
                <>
                  <tr>
                  <td 
                  key={dado.TAREFA}>{dado.TAREFA}</td>
                  <td key={dado.VENCIDO}>{dado.VENCIDO}</td>
                  <td key={dado.D0}>{dado.D0}</td>
                  <td key={dado.D1}>{dado.D1}</td>
                  <td key={dado.D2}>{dado.D2}</td>
                  <td key={dado.D3}>{dado.D3}</td>
                  <td key={dado.TOTAL}>{dado.TOTAL}</td>
                  <td>
                    <button>
                      Detalhes
                    </button>
                  </td>
                </tr>
                <>
                  {dado.DRILLDOWN.map((sla) => {
                    return <p 
                    
                    key={sla.SLA}>SLA: {sla.SLA}</p>
                  })}
                </>
                </>
                
                
              )
            })}
        </tbody>
      </table>     
    </div>
    
    
      
  )
}
