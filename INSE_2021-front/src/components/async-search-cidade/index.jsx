import React, { useState } from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import axios from "axios";
import { Container, SchoolDetails } from "./styles.js";
import { Modal } from "react-bootstrap";

const SEARCH_URI = "https://localhost:7291/api/Inse2021/Search";

export const AsyncSearchCidade = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSearch = (query) => {
    setIsLoading(true);

    axios
      .get(`${SEARCH_URI}?NoMunicipio=${query}`)
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
    console.log('abriu');
    console.log(selected);
    if (selected.length > 0){
      setShowModal(true);
    }
  };

  const removeDuplicateOptions = (options, key) => {
    const uniqueOptions = [];
    const uniqueValues = new Set();
  
    for (const option of options) {
      const optionValue = option[key];
      if (!uniqueValues.has(optionValue)) {
        uniqueValues.add(optionValue);
        uniqueOptions.push(option);
      }
    }
  
    return uniqueOptions;
  };

  return (
    <Container>
      <AsyncTypeahead
        filterBy={() => true}
        id="AsyncSearch"
        isLoading={isLoading}
        labelKey="noMunicipio"
        minLength={3}
        onSearch={handleSearch}
        onChange={handleSelectOption}
        options={removeDuplicateOptions(options, 'noMunicipio')} 
        placeholder="Pesquise por uma cidade..."
        renderMenuItemChildren={(option) => (
          <>
            <span>{option.noMunicipio}</span>
          </>
        )}
      />

      <Modal show={showModal} size="lg" onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Detalhes da Cidade</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SchoolDetails>
            {selectedOption && (
              <>
                teste
                {/* <h3>No Escola: {selectedOption.noEscola}</h3>
                <h6>Média INSe: {selectedOption.mediaInse} - Classificação {selectedOption.inseClassificacao}</h6>
                <h6>{selectedOption.noMunicipio} - {selectedOption.sgUf}</h6>
                <DoughnutSchool schoolDetails={selectedOption} /> */}
              </>
            )}
          </SchoolDetails>
        </Modal.Body>
      </Modal>
    </Container>
  );
};
