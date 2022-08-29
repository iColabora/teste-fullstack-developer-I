import { Detail } from './Detail';

export function Details({ details }) {
  return (
    <tbody>
      <tr>
        <td colSpan={7}>
          <tr className="details">
            <td className="details__row">Protocolo</td>
            <td className="details__row">Operador</td>
            <td className="details__row">Regua</td>
            <td className="details__row">Incio</td>
            <td className="details__row">SLA</td>
          </tr>
          {details?.map((detail) => {
            return <Detail key={detail.protocolo} {...detail} />;
          })}
        </td>
      </tr>
    </tbody>
  );
}
