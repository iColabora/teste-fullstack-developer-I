import "./style.scss";
import { Tarefa } from "../../Types/Tarefa";
import { CgCloseR } from "react-icons/cg";
import { useEffect, useState } from "react";

interface ShowTableDetailsProps {
  tarefa?: Tarefa;
  setTarefa: (tarefa: Tarefa | undefined) => void;
}

export default function ShowTableDetails({ tarefa, setTarefa }: ShowTableDetailsProps) {
  var toApllyZebra = 0;
  const [checkboxes, setCheckboxes] = useState({
    status: true,
    protocolo: true,
    regua: true,
    tipoSolicitacao: true,
    inicio: true,
    operador: true,
    SLA: true,
    instancia: true,
  });

  useEffect(() => {
    document.addEventListener(
      "keydown",
      (evt) => {
        if (evt.key === "Escape") {
          setTarefa(undefined);
        }
      },
      true
    );
  }, []);

  return (
    <>
      <div onClick={() => setTarefa(undefined)} className="closeWindow"></div>
      <div className="windowContainer">
        <div className="windowClose">
          <CgCloseR
            className="windowCloseButton"
            onClick={() => setTarefa(undefined)}
            size={24}
          />
        </div>
        <div className="tableOptions">
          <span>
            Status:
            <input
              type="checkbox"
              onClick={() => setCheckboxes({ ...checkboxes, status: !checkboxes.status })}
              checked={checkboxes.status}
            />
          </span>
          <span>
            Protocolo:
            <input
              type="checkbox"
              onClick={() =>
                setCheckboxes({ ...checkboxes, protocolo: !checkboxes.protocolo })
              }
              checked={checkboxes.protocolo}
            />
          </span>
          <span>
            Regua:
            <input
              type="checkbox"
              onClick={() => setCheckboxes({ ...checkboxes, regua: !checkboxes.regua })}
              checked={checkboxes.regua}
            />
          </span>
          <span>
            Tipo Solicitação:{" "}
            <input
              type="checkbox"
              onClick={() =>
                setCheckboxes({
                  ...checkboxes,
                  tipoSolicitacao: !checkboxes.tipoSolicitacao,
                })
              }
              checked={checkboxes.tipoSolicitacao}
            />
          </span>
          <span>
            Inicio:
            <input
              type="checkbox"
              onClick={() => setCheckboxes({ ...checkboxes, inicio: !checkboxes.inicio })}
              checked={checkboxes.inicio}
            />
          </span>
          <span>
            Operador:
            <input
              type="checkbox"
              onClick={() => setCheckboxes({ ...checkboxes, operador: !checkboxes.operador })}
              checked={checkboxes.operador}
            />
          </span>
          <span>
            SLA:
            <input
              type="checkbox"
              onClick={() => setCheckboxes({ ...checkboxes, SLA: !checkboxes.SLA })}
              checked={checkboxes.SLA}
            />
          </span>
          <span>
            Instância:
            <input
              type="checkbox"
              onClick={() =>
                setCheckboxes({ ...checkboxes, instancia: !checkboxes.instancia })
              }
              checked={checkboxes.instancia}
            />
          </span>
        </div>
        <div className="tableContainer">
          <table className="drillDown">
            <thead>
              <tr>
                {checkboxes.status && <th>Status</th>}
                {checkboxes.protocolo && <th>Protocolo</th>}
                {checkboxes.regua && <th>Régua</th>}
                {checkboxes.tipoSolicitacao && <th>Tipo Solicitação</th>}
                {checkboxes.inicio && <th>Inicio</th>}
                {checkboxes.operador && <th>Operador</th>}
                {checkboxes.SLA && <th>SLA</th>}
                {checkboxes.instancia && <th>Instância</th>}
              </tr>
            </thead>
            <tbody>
              {tarefa?.DRILLDOWN.map((item) => {
                toApllyZebra++;
                return (
                  <tr className={toApllyZebra % 2 ? "itemZebra" : ""}>
                    {checkboxes.status && <td>{item.STATUS}</td>}
                    {checkboxes.protocolo && <td>{item.PROTOCOLO}</td>}
                    {checkboxes.regua && <td>{item.REGUA}</td>}
                    {checkboxes.tipoSolicitacao && <td>{item.TIPO_SOLICITACAO}</td>}
                    {checkboxes.inicio && <td>{item.inicio}</td>}
                    {checkboxes.operador && <td>{item.operador}</td>}
                    {checkboxes.SLA && <td>{item.SLA}</td>}
                    {checkboxes.instancia && <td>{item.INSTANCIA}</td>}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
