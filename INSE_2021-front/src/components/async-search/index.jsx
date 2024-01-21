import React, { useState } from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import axios from "axios";
import { Container, SchoolDetails } from "./styles";
import { Modal } from "react-bootstrap";
import { DoughnutSchool } from "../Doughnut/index.jsx";
import { DropdownButtonHome } from "../DropdownButtonHome/index.jsx";
import { AsyncSearchCidade } from "../async-search-cidade";
import { DropdownEstados } from "../dropdown-estados/index.jsx";

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

  const handleCloseModal = () => {
    setShowModal(false);
    setOptions([]);
  };

  const handleSelectOption = (selected) => {
    setSelectedOption(selected[0]);
    if (selected.length > 0) {
      setShowModal(true);
    }
  };

  return (
    <>
      <Container>
        <AsyncTypeahead
          filterBy={() => true}
          id="AsyncSearch"
          isLoading={isLoading}
          labelKey="noEscola"
          minLength={4}
          onSearch={handleSearch}
          onChange={handleSelectOption}
          options={options}
          placeholder="Pesquise por uma escola..."
          renderMenuItemChildren={(option) => (
            <>
              <span>{option.noEscola}</span>
            </>
          )}
        />
      </Container>
      <Modal show={showModal} size="lg" onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Detalhes da Escola</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SchoolDetails>
            {selectedOption && (
              <>
                <h3>No Escola: {selectedOption.noEscola}</h3>
                <h6>
                  Média INSe: {selectedOption.mediaInse} - Classificação
                  {selectedOption.inseClassificacao}
                </h6>
                <h6>
                  {selectedOption.noMunicipio} - {selectedOption.sgUf} | Alunos
                  Participantes: {selectedOption.qtdAlunosInse}
                </h6>
                <DoughnutSchool schoolDetails={selectedOption} />
              </>
            )}
          </SchoolDetails>
        </Modal.Body>
      </Modal>
    </>
  );
};
