import { useState, useEffect } from 'react'
import './Report1.css'
import {ListPerStatus} from "./Report1_ListPerStatus"

function Report1() {
  const [status, setStatus] = useState("");
  const [alert, setAlert] = useState("");
  const [tasks, setTasks] = useState([]);
  const [total, setTotal] = useState([]);
  const [listPerStatus, setListPerStatus] = useState(null);

  useEffect(() => {
    setStatus("Carregando dados...");
    setAlert("");
    const apiURL = `https://s3.sa-east-1.amazonaws.com/icolabora.com.br/api-test-dev.json`;
    //const apiURL = "http://localhost/iColabora/";
    fetch(apiURL, {
      method: "GET"
    })
    .then(res => res.json())
    .then(data => {
      setTotal(data[(data.length - 1)]);
      data.pop();
      setTasks(data);
    }).catch(e => {
      setTasks([]);
      setAlert("Não foi possível carregar a lista de tarefas.");
    }).finally(() => {
      setStatus("");
    });
  }, []);

  function getListPerStatus(e){
    setListPerStatus(tasks[e.target.parentElement.id]);
  }

  function alertDismiss(){
    setAlert("");
  }

  return (
    <>
      {status != "" && (
        <div id="status-container">
          <div id="status-popup">{status}</div>
        </div>
      )}

      {alert != "" && (
        <div id="alert-popup" onClick={alertDismiss}>{alert}</div>
      )}

      <div className="container">
        <h1>Status das tarefas</h1>
        <table className="main-table">
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Vencido</th>
              <th>D0</th>
              <th>D1</th>
              <th>D2</th>
              <th>D3</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {
              tasks.map((task, index) => (
                <tr key={index} id={index} className="pointer" onClick={getListPerStatus}>
                  <td className="col-tarefa">{task.TAREFA}</td>
                  <td className="col-vencido">{task.VENCIDO}</td>
                  <td className="col-d0">{task.D0}</td>
                  <td className="col-d1">{task.D1}</td>
                  <td className="col-d2">{task.D2}</td>
                  <td className="col-d3">{task.D3}</td>
                  <td className="col-total">{task.TOTAL}</td>
                </tr>
              ))
            }
          </tbody>
          <tfoot>
            <tr>
              <th>{total.TAREFA}</th>
              <th>{total.VENCIDO}</th>
              <th>{total.D0}</th>
              <th>{total.D1}</th>
              <th>{total.D2}</th>
              <th>{total.D3}</th>
              <th>{total.TOTAL}</th>
            </tr>
          </tfoot>
        </table>
        
        <br />

        <ListPerStatus list={listPerStatus} />
      </div>
    </>
  )
}

export default Report1
