import React from 'react';
import { useEffect, useState } from 'react';
import api from "./services/api";

export default function App() {



   const [relatorio, setRelatorio] = useState([]);

   useEffect(() => {
    api
        .get("/v1/histograma/")
        .then((response) => {
          setRelatorio(response.data)
        })
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    }, []);

   return(
      <>
      {console.log(relatorio)}
        <div className="container">
        <table>
          <tr>
            <th>Tarefa</th>
            <th>Vencido</th>
            <th>D0</th>
            <th>D1</th>
            <th>D2</th>
            <th>D3</th>
            <th>TOTAL</th>
          </tr>
          
          {relatorio.map(linhaDoRelatorioAtual => {
            return (
              <tr>
                <td>{linhaDoRelatorioAtual.TAREFA}</td>
                <td>{linhaDoRelatorioAtual.VENCIDO}</td>
                <td>{linhaDoRelatorioAtual.D0}</td>
                <td>{linhaDoRelatorioAtual.D1}</td>
                <td>{linhaDoRelatorioAtual.D2}</td>
                <td>{linhaDoRelatorioAtual.D3}</td>
                <td>{linhaDoRelatorioAtual.TOTAL}</td>
              </tr>
            )
            
          })}
        </table>
        </div>
      </>
)}
