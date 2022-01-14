import React, { useContext } from 'react';
import Context from '../context/Context';
import TableDetails from './TableDetails';

function Table() {
  const { data, setRegua, setStatus} = useContext(Context);

  const handleClick=(status, regua)=>{
    setStatus(status);
    setRegua(regua);
    if (status === 'Aguardando FUP') setStatus('FUP');
  }

  const tableBody = () => {
    const tbody = data.map((infos, key) => (
      <tr key={key} className={`trbody trbody${key}`}>
        <div className={`tdbody tdbody${key} tdtask`}>{infos.TAREFA}</div>
        <td onClick={ () => handleClick(infos.TAREFA, 'VENCIDO')} className={`tdbody tdbody${key} tdvencido`}>{infos.VENCIDO}</td>
        <td onClick={ () => handleClick(infos.TAREFA, 'D0')} key={key+3} className={`tdbody tdbody${key} tdd0`}>{infos.D0}</td>
        <td onClick={ () => handleClick(infos.TAREFA, 'D1')} className={`tdbody tdbody${key} tdd1`}>{infos.D1}</td>
        <td onClick={ () => handleClick(infos.TAREFA, 'D2')} className={`tdbody tdbody${key} tdd2`}>{infos.D2}</td>
        <td onClick={ () => handleClick(infos.TAREFA, 'D3')} className={`tdbody tdbody${key} tdd3`}>{infos.D3}</td>
        <td className={`tdbody tdbody${key} tdtotal`}>{infos.TOTAL}</td>
      </tr>
    ));
    return tbody;
  }

  
  return (
    <>
      <table className="table">
        <thead className="thead">
          <tr>
            <th className="td tarefa tdhead">Tarefa</th>
            <th className="tdhead">Vencido</th>
            <th className="tdhead">D0</th>
            <th className="tdhead">D1</th>
            <th className="tdhead">D2</th>
            <th className="tdhead">D3</th>
            <th className="tdhead">Total</th>
          </tr>
        </thead>
        <tbody>
          {tableBody()}
        </tbody>
      </table>
      <TableDetails/>
    </>
  )
};

export default Table;
