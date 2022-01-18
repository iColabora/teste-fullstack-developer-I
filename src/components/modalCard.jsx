const ModalCard = ({ data }) => {
  return (
    <>
      {data.map((service, index) => (
        <ul key={index} className="modalCard">
          <li>
            <strong>Instância:</strong> {service.INSTANCIA}
          </li>
          <li>
            <strong>Protocolo:</strong> {service.PROTOCOLO}
          </li>
          <li>
            <strong>Régua:</strong> {service.REGUA}
          </li>
          <li>
            <strong>Início:</strong> {service.inicio}
          </li>
          <li>
            <strong>SLA:</strong> {service.SLA}
          </li>
        </ul>
      ))}
    </>
  );
};

export default ModalCard;
