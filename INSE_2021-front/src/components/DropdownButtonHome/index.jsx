import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import { Container } from "./styles";

export const DropdownButtonHome = () => {
  

  const handleChange = (e) => {
    console.log(e.target.value);
  }; 

  return (
    <Container>
      <Form.Select aria-label="Default select example" defaultValue={'1'} onChange={handleChange}>
        <option value="escola">Escola</option>
        <option value="cidade">Cidade</option>
        <option value="estado">Estado</option>
        <option value="regiao">Região</option>
      </Form.Select>
    </Container>
  );
};
