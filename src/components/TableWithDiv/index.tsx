import "./style.scss";
import { Tarefa } from "../../Types/Tarefa";
import { useState } from "react";
import ShowTableDetails from "../ShowTableDetails";

interface TableProps {
  tarefas: Tarefa[];
  total: Tarefa | undefined;
  setSelectedTask: (tarefa: Tarefa) => void;
}

export default function TableWithDiv({ tarefas, total, setSelectedTask }: TableProps) {
  console.log(tarefas);
  console.log(total);
  return (
    <div className="containerContent">
      <div className="tableContainer">
        <div className="tableHeader">
          <span className="item_1">Tarefa</span>
          <span className="item_2">Vencido</span>
          <span className="item_3">D0</span>
          <span className="item_4">D1</span>
          <span className="item_5">D2</span>
          <span className="item_6">D3</span>
          <span className="item_7">Total</span>
        </div>
        <div className="tableBody">
          {tarefas.map((tarefa) => {
            return (
              <div
                className="tableItem"
                key={tarefa.TAREFA}
                onClick={() => setSelectedTask(tarefa)}
              >
                <span className="item_1">
                  <div className="hoverEffect"></div>
                  <span>{tarefa.TAREFA}</span>
                </span>
                <span className="item_2">{tarefa.VENCIDO}</span>
                <span className="item_3">{tarefa.D0}</span>
                <span className="item_4">{tarefa.D1}</span>
                <span className="item_5">{tarefa.D2}</span>
                <span className="item_6">{tarefa.D3}</span>
                <span className="item_7">{tarefa.TOTAL}</span>
              </div>
            );
          })}
        </div>
        <div className="tableFooter">
          <span className="item_1">{total?.TAREFA}</span>
          <span className="item_2">{total?.VENCIDO}</span>
          <span className="item_3">{total?.D0}</span>
          <span className="item_4">{total?.D1}</span>
          <span className="item_5">{total?.D2}</span>
          <span className="item_6">{total?.D3}</span>
          <span className="item_7">{total?.TOTAL}</span>
        </div>
      </div>
    </div>
  );
}
