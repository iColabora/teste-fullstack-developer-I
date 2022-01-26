import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import "../components/Table.css";

const CustomizedTables = ({ data }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function listTasks() {
      const response = await axios.get("http://localhost:3333/tasks");
      setTasks(response.data);
      console.log(response.data);
    }

    listTasks();
  }, []);

  const calcTotal = useCallback(
    (arr, key) => {
      return arr.reduce((acc, val) => (acc += val[key]), 0);
    },
    [tasks]
  );

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" className="table__header task__header">
              Tarefa
            </th>
            <th scope="col" className="table__header due__header">
              Vencido
            </th>
            <th scope="col" className="table__header d__header">
              D0
            </th>
            <th scope="col" className="table__header d__header">
              D1
            </th>
            <th scope="col" className="table__header d__header">
              D2
            </th>
            <th scope="col" className="table__header d__header">
              D3
            </th>
            <th scope="col" className="table__header total__header">
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((row) => (
            <tr key={row.id}>
              <td className="table__body task__description">{row.tarefas}</td>
              <td className="info1 table__body task__value">{row.vencidos}</td>
              <td className="info_value_3 table__body deZero__value">
                {row.d_zero}
              </td>
              <td className="info_value_4 table__body deUm__value">
                {row.d_um}
              </td>
              <td className="info_value_5 table__body deDois__value">
                {row.d_dois}
              </td>
              <td className="info_value_6 table__body deTres__value">
                {row.d_tres}
              </td>
              <td className="info_value_7 table__body taskSum__values">
                {row.total}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <th scope="col" className="table__footer total__footer">
            Total
          </th>
          <td className="table__footer">{calcTotal(tasks, "vencidos")}</td>
          <td className="table__footer">{calcTotal(tasks, "d_zero")}</td>
          <td className="table__footer">{calcTotal(tasks, "d_um")}</td>
          <td className="table__footer">{calcTotal(tasks, "d_dois")}</td>
          <td className="table__footer">{calcTotal(tasks, "d_tres")}</td>
          <td className="table__footer">{calcTotal(tasks, "total")}</td>
        </tfoot>
      </table>

      <button type="button" onClick={function () {}}>
        Add tasks
      </button>
    </>
  );
};

export default CustomizedTables;
