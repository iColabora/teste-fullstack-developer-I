import React, { useEffect, useState } from "react";
import ShowTableDetails from "./components/ShowTableDetails";
import TableWithDiv from "./components/TableWithDiv";
import TableWithTable from "./components/TableWithTable";
import api from "./services/api";
import "./styles/App.scss";
import { Tarefa } from "./Types/Tarefa";

function App() {
  const [os, setOs] = useState<Tarefa[]>([]);
  const [total, setTotal] = useState<Tarefa>();
  const [selectedTask, setSelectedTask] = useState<Tarefa>();

  useEffect(() => {
    const response = api.get("").then((data) => {
      setTotal(data.data.slice(-1)[0]);
      data.data.pop();
      setOs(data.data);
    });
  }, []);

  useEffect(() => {
    console.log("Task selecionada:");
    console.log(selectedTask);
  }, [selectedTask]);

  return (
    <>
      {selectedTask && <ShowTableDetails setTarefa={setSelectedTask} tarefa={selectedTask} />}

      <div className="container">
        <h1 className="title">Relatório</h1>
        <TableWithDiv tarefas={os} total={total} setSelectedTask={setSelectedTask} />
        {/* <TableWithTable tarefas={os} total={total} /> */}
      </div>
    </>
  );
}

export default App;
