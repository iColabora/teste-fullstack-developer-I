import { useState } from 'react';
import { Details } from './Details';

export function Row({ tarefa, vencido, d0, d1, d2, d3, total, details }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <tbody>
        <tr className="row">
          <td
            className={!isOpen ? 'row__task' : 'row__task__open'}
            onClick={() => setIsOpen(!isOpen)}
          >
            {tarefa}
          </td>
          <td className="row__expired">{vencido}</td>
          <td className="row__day__d0">{d0}</td>
          <td className="row__day__d1">{d1}</td>
          <td className="row__day__d2">{d2}</td>
          <td className="row__day__d3">{d3}</td>
          <td className="row__total">{total}</td>
        </tr>
      </tbody>
      {isOpen ? <Details details={details} /> : null}
    </>
  );
}
