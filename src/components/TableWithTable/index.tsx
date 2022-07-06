import "./style.scss";
import { Tarefa } from "../../Types/Tarefa";

interface TableProps {
  tarefas: Tarefa[];
  total: Tarefa | undefined;
}

export default function TableWithTable({ tarefas, total }: TableProps) {
  return (
    <div className="table__container">
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
          </tr>
        </thead>
        <tbody>
          {tarefas.map((tarefa) => {
            return (
              <tr>
                <td>
                  <div></div>
                  <span>{tarefa.TAREFA}</span>
                </td>
                <td>{tarefa.VENCIDO}</td>
                <td>{tarefa.D0}</td>
                <td>{tarefa.D1}</td>
                <td>{tarefa.D2}</td>
                <td>{tarefa.D3}</td>
                <td>{tarefa.TOTAL}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th>{total?.TAREFA}</th>
            <th>{total?.VENCIDO}</th>
            <th>{total?.D0}</th>
            <th>{total?.D1}</th>
            <th>{total?.D2}</th>
            <th>{total?.D3}</th>
            <th>{total?.TOTAL}</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
