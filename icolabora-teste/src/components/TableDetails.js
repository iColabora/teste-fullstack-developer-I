import React, { useContext } from 'react';
import Context from '../context/Context';

function TableDetails() {
  const { data, regua, status } = useContext(Context);
  const tableDetails = data.map((infos) => (infos.DRILLDOWN));

  return (
    <table className="table">
    <thead className="theadDetail">
      <tr className="theadDetail">
        <th className="tdhead detailsHead">Operador</th>
        <th className="tdhead detailsHead">Protocolo</th>
        <th className="tdhead detailsHead">SLA</th>
        <th className="tdhead detailsHead">Instancia</th>
        <th className="tdhead detailsHead">Status</th>
      </tr>
    </thead>
    <tbody className="tbodyDetail">
      {
        (tableDetails) ?
          <>
            {tableDetails.map((inf, key) => (inf.map(infos => {
              return (
                <tr className="trbody">
                  {/* {<td>{infos.REGUA} : </td>} */}
                  { infos.REGUA === regua & infos.STATUS === status ?  (infos.PROTOCOLO || infos.SLA ?
                  <>
                    <td key={key+1} className="detalhes">{infos.operador}</td>
                    <td key={key+1} className="detalhes">{infos.PROTOCOLO}</td>
                    <td key={key+2} className="detalhes">{infos.SLA}</td>
                    <td key={key+2} className="detalhes">{infos.INSTANCIA}</td>
                    <td key={key+2} className="detalhes">{infos.STATUS}</td>
                  </>
                  : false) : <></>}
                </tr>
                )
            })))}
          </>
        : <tr> <td>Details not found</td> </tr>
      }
      </tbody>
  </table>
  )
}

export default TableDetails;

