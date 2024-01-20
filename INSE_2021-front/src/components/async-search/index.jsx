import React, { useState } from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import axios from "axios";
import { Container } from "./styles";
import { Modal } from "react-bootstrap";
import { VerticalBarSchool } from "../charts-vertical-bar-school";

const SEARCH_URI = "https://localhost:7291/api/Inse2021/Search";

export const AsyncSearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSearch = (query) => {
    setIsLoading(true);

    axios
      .get(`${SEARCH_URI}?NoEscola=${query}`)
      .then((resp) => {
        const items = resp.data;
        setOptions(items);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Erro na solicitação:", error);
        setIsLoading(false);
      });
  };

  const handleInputChange = (input) => {
    if (input === "") {
      // O usuário clicou em uma opção, abre o modal
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSelectOption = (selected) => {
    setSelectedOption(selected[0]);
    setShowModal(true);
  };

  return (
    <Container>
      <h4>Escola:</h4>
      <AsyncTypeahead
        filterBy={() => true}
        id="AsyncSearch"
        isLoading={isLoading}
        labelKey="noEscola"
        minLength={4}
        onSearch={handleSearch}
        onChange={handleSelectOption}
        onInputChange={handleInputChange}
        options={options}
        placeholder="Pesquise por uma escola..."
        renderMenuItemChildren={(option) => (
          <>
            <span>{option.noEscola}</span>
          </>
        )}
      />

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Detalhes da Escola</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedOption && (
            <>
              <p>No Escola: {selectedOption.noEscola}</p>
              {/* Adicione mais campos conforme necessário */}
              <VerticalBarSchool schoolDetails={selectedOption}/>
            </>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};
