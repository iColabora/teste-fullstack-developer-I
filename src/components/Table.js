import { useEffect, useState, useCallback } from "react";
import "../components/Table.css";

const CustomizedTables = () => {
  const [tasks, setTasks] = useState([]);
  

  useEffect(async() => {
      const response = await fetch("https://ico-fullstack-test.herokuapp.com/v1/histograma");
      const tasks = await response.json();
      tasks.pop();
      setTasks(tasks);
      console.log(tasks);
    
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
              <td className="table__body task__description">{row.TAREFA}</td>
              <td className="info1 table__body task__value">{row. VENCIDO}</td>
              <td className="info_value_3 table__body deZero__value">
                {row.D0}
              </td>
              <td className="info_value_4 table__body deUm__value">
                {row.D1}
              </td>
              <td className="info_value_5 table__body deDois__value">
                {row.D2}
              </td>
              <td className="info_value_6 table__body deTres__value">
                {row.D3}
              </td>
              <td className="info_value_7 table__body taskSum__values">
                {row.TOTAL}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <th scope="col" className="table__footer total__footer">
            Total
          </th>
          <td className="table__footer">{calcTotal(tasks, "VENCIDO")}</td>
          <td className="table__footer">{calcTotal(tasks, "D0")}</td>
          <td className="table__footer">{calcTotal(tasks, "D1")}</td>
          <td className="table__footer">{calcTotal(tasks, "D2")}</td>
          <td className="table__footer">{calcTotal(tasks, "D3")}</td>
          <td className="table__footer">{calcTotal(tasks, "TOTAL")}</td>
        </tfoot>
      </table>

      <button type="button" onClick={function () {}}>
        Add tasks
      </button>
    </>
  );
};

export default CustomizedTables;
