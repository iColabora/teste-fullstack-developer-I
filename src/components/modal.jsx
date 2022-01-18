import ModalCard from "./modalCard";
import "../App.scss";

const Modal = ({ data }) => {
  return (
    <div className="modalFila">
      {data.length === 0 ? "Nada consta" : <ModalCard data={data} />}
    </div>
  );
};

export default Modal;
