import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Container, InsideContainer, SchoolDetails } from "./styles";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { DoughnutSchool } from "../Doughnut/index.jsx";

const SEARCH_URI = "https://localhost:7291/api/Inse2021/";

export const DropdownEstados = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedOptionDetails, setSelectedOptionDetails] = useState([]);

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);

    axios
      .get(`${SEARCH_URI}MediasPorLocalidade?siglaEstado=${selectedValue}`)
      .then((resp) => {
        setSelectedOptionDetails(resp.data);
      })
      .catch((error) => {
        console.error("Erro na solicitação:", error);
      });
    console.log(selectedOptionDetails);

    if (selectedValue) {
      setShowModal(true);
    }
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <Container>
        <InsideContainer>
          <Form.Select
            aria-label="Default select example"
            onChange={handleChange}
          >
            <option value="AC">AC</option>
            <option value="AL">AL</option>
            <option value="AP">AP</option>
            <option value="AM">AM</option>
            <option value="BA">BA</option>
            <option value="CE">CE</option>
            <option value="DF">DF</option>
            <option value="ES">ES</option>
            <option value="GO">GO</option>
            <option value="MA">MA</option>
            <option value="MT">MT</option>
            <option value="MS">MS</option>
            <option value="MG">MG</option>
            <option value="PA">PA</option>
            <option value="PB">PB</option>
            <option value="PR">PR</option>
            <option value="PE">PE</option>
            <option value="PI">PI</option>
            <option value="RJ">RJ</option>
            <option value="RN">RN</option>
            <option value="RS">RS</option>
            <option value="RO">RO</option>
            <option value="RR">RR</option>
            <option value="SC">SC</option>
            <option value="SP">SP</option>
            <option value="SE">SE</option>
            <option value="TO">TO</option>
          </Form.Select>
        </InsideContainer>
      </Container>

      <Modal show={showModal} size="lg" onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Detalhes do estado</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SchoolDetails>
              {selectedOption && (
                <>
                  <h3>Estado: {selectedOption}</h3>
                  <DoughnutSchool schoolDetails={selectedOptionDetails} />
                </>
              )}
            </SchoolDetails>
          </Modal.Body>
        </Modal>
    </>
  );
};
