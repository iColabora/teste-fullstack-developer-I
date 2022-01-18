import Modal from "../components/modal";

const AguardandoTratativa = ({ data, setModalFila }) => {
  const tratativa = data[0].DRILLDOWN;

  return (
    <>
      <div className="modalTitle">
        CASOS EM FILA - AGUARDANDO TRATATIVA
        <button className="btnModal" onClick={() => setModalFila(false)}>
          Fechar
        </button>
      </div>
      <Modal data={tratativa} />
    </>
  );
};

export default AguardandoTratativa;
