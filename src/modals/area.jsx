import Modal from "../components/modal";

const AguardandoArea = ({ data, setModalArea }) => {
  const tratativa = data[2].DRILLDOWN;

  return (
    <>
      <div className="modalTitle">
        CASOS - AGUARDANDO ÁREA
        <button className="btnModal" onClick={() => setModalArea(false)}>
          Fechar
        </button>
      </div>
      <Modal data={tratativa} />
    </>
  );
};

export default AguardandoArea;
