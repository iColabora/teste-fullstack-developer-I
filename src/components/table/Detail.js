export function Detail({ protocolo, operador, regua, inicio, sla }) {
  return (
    <tbody>
      <tr className="detail">
        <td className="detail__row">{protocolo}</td>
        <td className="detail__row">{operador}</td>
        <td className="detail__row">{regua}</td>
        <td className="detail__row">{inicio}</td>
        <td className="detail__row">{sla}</td>
      </tr>
    </tbody>
  );
}
