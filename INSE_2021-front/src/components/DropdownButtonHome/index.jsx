import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Container, FormContainer } from './styles';
import { AsyncSearch } from '../async-search';
import { AsyncSearchCidade } from '../async-search-cidade';
import { DropdownEstados } from '../dropdown-estados';

export const DropdownButtonHome = () => {
  const [selectedOption, setSelectedOption] = useState('escola');

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <Container>
      <FormContainer>
        <Form.Select aria-label="Default select example" value={selectedOption} onChange={handleChange}>
        <option value="escola">Escola</option>
        <option value="cidade">Cidade</option>
        <option value="estado">Estado</option>
      </Form.Select>
      </FormContainer>

      {selectedOption === 'escola' && <AsyncSearch />}
      {selectedOption === 'cidade' && <AsyncSearchCidade />}
      {selectedOption === 'estado' && <DropdownEstados />}
    </Container>
  );
};
