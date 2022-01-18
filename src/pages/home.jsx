import React, { useEffect, useState } from "react";
import axios from "axios";
import TableSlas from "../components/table";
import AguardandoTratativa from "../modals/fila";
import EmTratativa from "../modals/tratativa";
import AguardandoArea from "../modals/area";
import AguardandoFUP from "../modals/fup";

const SlasHomePage = () => {
  const [slas, setSlas] = useState([]);
  const [modalFila, setModalFila] = useState(false);
  const [modalTratativa, setModalTratativa] = useState(false);
  const [modalArea, setModalArea] = useState(false);
  const [modalFUP, setModalFUP] = useState(false);

  useEffect(() => {
    const getAllSlas = async () => {
      try {
        const response = await axios.get(
          "https://ico-fullstack-test.herokuapp.com/v1/histograma"
        );
        setSlas(response.data);
      } catch (err) {
        console.error(`Error fetching slas: ${err}`);
      }
    };
    getAllSlas();
  }, []);

  return (
    <div>
      <TableSlas
        data={slas}
        setModalFila={setModalFila}
        setModalTratativa={setModalTratativa}
        setModalArea={setModalArea}
        setModalFUP={setModalFUP}
      />
      {modalFila && (
        <AguardandoTratativa data={slas} setModalFila={setModalFila} />
      )}
      {modalTratativa && (
        <EmTratativa data={slas} setModalTratativa={setModalTratativa} />
      )}
      {modalArea && <AguardandoArea data={slas} setModalArea={setModalArea} />}
      {modalFUP && <AguardandoFUP data={slas} setModalFUP={setModalFUP} />}
    </div>
  );
};

export default SlasHomePage;
