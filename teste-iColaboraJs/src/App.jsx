import { useState,useEffect } from 'react';
import './style/style.scss';
const App = () =>{

  const [tabela,setTabela] = useState([]);
  const [view,setView] = useState(false);
  let tabelaCopy;
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
    
  const mostraDetalhes = (index) =>{
    setView(!view);
    tabelaCopy = [...tabela[index].DRILLDOWN];
    console.log(tabelaCopy);
  }
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
            {view?  (
                <tr className='tview'>
                  <td>Instancia</td>
                  <td>Status</td>
                  <td >Protocolo</td>
                  <td>Regua</td>
                  <td>Inicio</td>
                  <td>SLA</td>
                  <td>Tipo de Solicitação</td>
                  <td>Operador</td>
                </tr>
                
              ):null
              }
          </tr>
          {//Construção da cabeça descritiva da tabela
          }
        </thead>
        <tbody>
          
            {
              tabela.map((item,index)=>(
              <tr key={index}>
              <td className='tarefa' onClick={(e) => mostraDetalhes(index)}>{item.TAREFA}</td>
              <td className='vencido'>{item.VENCIDO}</td>
              <td className='d0'>{item.D0}</td>
              <td className='d1'>{item.D1}</td>
              <td className='d2'>{item.D2}</td>
              <td className='d3'>{item.D3}</td>
              <td className='totalf'>{item.TOTAL}</td>

              {view?  (
                item.DRILLDOWN.map((item,index)=>(
                <tr key={index} className='details' >
                  <td>{item.INSTANCIA}</td>
                  <td>{item.STATUS}</td>
                  <td>{item.PROTOCOLO}</td>
                  <td>{item.REGUA}</td>
                  <td>{item.inicio}</td>
                  <td>{item.SLA}</td>
                  <td>{item.TIPO_SOLICITACAO}</td>
                  <td>{item.operador}</td>
                </tr>
              ))
                
              ):null
              }
              
              </tr>
              ))
              //Tentei ajustar o máximo possível, porém faltou montar os detalhes por celula utilizando o index
              //E não em todas as linhas :/
              
                
            
             
           }
           
             
          
            

         </tbody>
      </table>
      
    </div>
  );
}

export default App;
