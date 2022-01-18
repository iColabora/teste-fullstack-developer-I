import Modal from "../components/modal";

const EmTratativa = ({ data, setModalTratativa }) => {
  const tratativa = data[1].DRILLDOWN;

  return (
    <>
      <div className="modalTitle">
        CASOS EM TRATATIVA
        <button className="btnModal" onClick={() => setModalTratativa(false)}>
          Fechar
        </button>
      </div>
      <Modal data={tratativa} />
    </>
  );
};

export default EmTratativa;
