import {useEffect,useState,useCallback} from "react";
import Table from 'react-bootstrap/Table';
import '../components/body.css'

const Body = ()=>{

    const [tasks,setTasks] = useState([]);



    useEffect(/*async*/() => {

        // Aqui a API iria puxar as informações para o teste:
        // const response = await fetch("https://ico-fullstack-test.herokuapp.com/v1/histograma");
        // const tasks = await response.json();
        // tasks.pop();

        let Vencidos;
        let D0;
        let D1;
        let D2;
        let D3;
        let Total;

        // Esta etapa possuí os valores chumbados para mostrar o cálculo em atividade:
        const tasks = [{Tarefa : "Fila - em Tratativa", Vencidos : 10, D0 : 20, D1 : 10, D2 : 10,D3:10, Total:60},
          {Tarefa : "Em tratativa", Vencidos : 10, D0 : 20, D1 : 10, D2 : 10,D3:10, Total:60},
          {Tarefa : "Aguardando Área", Vencidos : 10, D0 : 20, D1 : 10, D2 : 10,D3:10, Total:60},
          {Tarefa : "Aguardando FUP", Vencidos : 10, D0 : 20, D1 : 10, D2 : 10,D3:10, Total:60}]
      setTasks(tasks);
    }, {})

    // Cálculo para visualizar a soma dos valores chumbados:
    const calcularTotal = useCallback (
        (arr,key) => {
            return arr.reduce((acc,val)=>(acc+=val[key]),0) 
        }, [tasks]
    )

    return (
        <>
            <Table className = "table_body"> 
                <thead>
                    <tr className = "row_header_color">
                        <th scope = "col" classname = "table_header task_header">
                            Tarefa
                        </th>
                        <th scope = "col" classname = "table_header due_header">
                            Vencido
                        </th>
                        <th scope = "col" classname = "table_header d0_header">
                            D0
                        </th>
                        <th scope = "col" classname = "table_header d1_header">    
                            D1
                        </th>
                        <th scope = "col" classname = "table_header d2_header">
                            D2
                        </th>
                        <th scope = "col" classname = "table_header d3_header">
                            D3
                        </th>
                        <th scope = "col" classname = "table_header total_header">
                            Total
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {tasks.map((row)=>(
                    <tr key={row.id}>
                        <td className = "col_value_task col_task">
                            {row.Tarefa}
                        </td>
                        <td className = "col_value col_vencidos">
                            {tasks[0].Vencidos}
                        </td>
                        <td className = "col_value col_d0">
                            {tasks[0].D0}
                        </td>
                        <td className = "col_value col_d1">
                            {tasks[0].D1}
                        </td>
                        <td className = "col_value col_d2">
                            {tasks[0].D2}
                        </td>
                        <td className = "col_value col_d3">
                            {tasks[0].D3}
                        </td>
                        <td className = "col_value col_total">
                            {tasks[0].Total}
                        </td>
                    </tr>
                    ))}
                </tbody>

                <tfoot>
                    <th scope="col" className="tablefooter totalfooter">
                        Total
                    </th>
                    <td className="tablefooter">{calcularTotal(tasks, "Vencidos")}</td>
                    <td className="tablefooter">{calcularTotal(tasks, "D0")}</td>
                    <td className="tablefooter">{calcularTotal(tasks, "D1")}</td>
                    <td className="tablefooter">{calcularTotal(tasks, "D2")}</td>
                    <td className="tablefooter">{calcularTotal(tasks, "D3")}</td>
                    <td className="tablefooter">{calcularTotal(tasks, "Total")}</td>
                 </tfoot>


            </Table>
        </>
    )
};

export default Body;