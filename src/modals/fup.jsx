import Modal from "../components/modal";

const AguardandoFUP = ({ data, setModalFUP }) => {
  const tratativa = data[3].DRILLDOWN;

  return (
    <>
      <div className="modalTitle">
        CASOS - AGUARDANDO FUP
        <button className="btnModal" onClick={() => setModalFUP(false)}>
          Fechar
        </button>
      </div>
      <Modal data={tratativa} />
    </>
  );
};

export default AguardandoFUP;
