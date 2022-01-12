import { useState,useEffect } from 'react';
import './style/style.scss';
const App = () =>{

  const [tabela,setTabela] = useState([]);

  useEffect(()=>{
    carregaDadosTabela();
  },[])

//Hook para renderizar a tabela assim que carrega a página

  const carregaDadosTabela = async () =>{
    let res = await fetch('https://ico-fullstack-test.herokuapp.com/v1/histograma');
    let json = await res.json();
    setTabela(json);
  }
    //Faz a requisição GET para a API
    
  return(
    <div>
      
      <table className='tabela'>
        <thead>
          <tr className='descricao'>
            <td className='tarefa'>Tarefa</td>
            <td className='vencidoHead'>Vencido</td>
            <td className='ds d0'>D0</td>
            <td className='ds d1'>D1</td>
            <td className='ds d2'>D2</td>
            <td className='ds d3'>D3</td>
            <td className='total'>Total</td>
          </tr>
          {//Construção da cabeça descritiva da tabela
          }
        </thead>
        <tbody>
            {
            tabela.map((item,index)=>(
              <tr key={index}>
              <td className='tarefa'>{item.TAREFA}</td>
              <td className='vencido'>{item.VENCIDO}</td>
              <td className='d0'>{item.D0}</td>
              <td className='d1'>{item.D1}</td>
              <td className='d2'>{item.D2}</td>
              <td className='d3'>{item.D3}</td>
              <td className='totalf'>{item.TOTAL}</td>
              </tr>
              
            ))
            //Construção dos dados da tabela utilizando a função map
            }
        
         </tbody>
      </table>
      
    </div>
  );
}

export default App;
