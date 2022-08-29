import React from 'react';

export function Header() {
  return (
    <tbody>
      <tr className="header">
        <td className="header__task">Tarefa</td>
        <td className="header__expired">Vencido</td>
        <td className="header__day">D0</td>
        <td className="header__day">D1</td>
        <td className="header__day">D2</td>
        <td className="header__day">D3</td>
        <td className="header__total">Total</td>
      </tr>
    </tbody>
  );
}
