export function ListPerStatus({list}){

    if (list != null && list.DRILLDOWN.length > 0){
        return (
            <div className="auxiliar-list">
                <h2>{list.TAREFA}</h2>
                <hr />
                <table className="auxiliar-table">
                    <thead>
                        <tr>
                            <th>Protocolo</th>
                            <th>Régua</th>
                            <th>Status</th>
                            <th>SLA</th>
                            <th>Operador</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.DRILLDOWN.map((task, index)=>(
                                <tr key={index}>
                                    <td>{task.PROTOCOLO}</td>
                                    <td>{task.REGUA}</td>
                                    <td>{task.STATUS}</td>
                                    <td>{task.SLA}</td>
                                    <td>{task.operador}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        );
    } else {
        return (
            <></>
        )
    }
}