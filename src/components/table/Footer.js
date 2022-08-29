export function Footer({ vencido, d0, d1, d2, d3, total }) {
  return (
    <tbody>
      <tr className="footer">
        <td className="footer__task">Total</td>
        <td className="footer__expired">{vencido}</td>
        <td className="footer__day">{d0}</td>
        <td className="footer__day">{d1}</td>
        <td className="footer__day">{d2}</td>
        <td className="footer__day">{d3}</td>
        <td className="footer__total">{total}</td>
      </tr>
    </tbody>
  );
}
