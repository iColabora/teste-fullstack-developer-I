import "../App.scss";

const TableSlas = (props) => {
  const { data, setModalFila, setModalTratativa, setModalArea, setModalFUP } =
    props;

  return (
    <div className="container">
      {data.length === 0 ? (
        "Processando informações..."
      ) : (
        <table className="table" id="testTable">
          <thead>
            <tr>
              <th scope="col">Tarefa</th>
              <th scope="col">Vencido</th>
              <th scope="col">D0</th>
              <th scope="col">D1</th>
              <th scope="col">D2</th>
              <th scope="col">D3</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {data.map((sla, index) => (
              <tr key={index}>
                <td
                  className={sla.TAREFA === "Total" ? "blueTotal" : "services"}
                  onClick={
                    sla.TAREFA === "Fila - Aguardando tratativa"
                      ? () => setModalFila(true)
                      : sla.TAREFA === "Em tratativa"
                      ? () => setModalTratativa(true)
                      : sla.TAREFA === "Aguardando área"
                      ? () => setModalArea(true)
                      : () => setModalFUP(true)
                  }
                >
                  {" "}
                  {sla.TAREFA}
                </td>
                <td
                  className={
                    sla.TAREFA === "Total" ? "blueTotal" : "serviceDue"
                  }
                >
                  {sla.VENCIDO}
                </td>
                <td className={sla.TAREFA === "Total" ? "blueTotal" : "DZero"}>
                  {sla.D0}
                </td>
                <td className={sla.TAREFA === "Total" ? "blueTotal" : "DOne"}>
                  {sla.D1}
                </td>
                <td className={sla.TAREFA === "Total" ? "blueTotal" : "DTwo"}>
                  {sla.D2}
                </td>
                <td className={sla.TAREFA === "Total" ? "blueTotal" : "DThree"}>
                  {sla.D3}
                </td>
                <td className={sla.TAREFA === "Total" ? "blueTotal" : "total"}>
                  {sla.TOTAL}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TableSlas;
