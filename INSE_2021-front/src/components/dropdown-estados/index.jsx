import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import Container from "./styles";

export const DropdownEstados = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <Container>
      <Form.Select
        aria-label="Default select example"
        defaultValue={"1"}
        onChange={handleChange}
      >
        <option value="acre">Acre</option>
        <option value="alagoas">Alagoas</option>
        <option value="amapa">Amapá</option>
        <option value="amazonas">Amazonas</option>
        <option value="bahia">Bahia</option>
        <option value="ceara">Ceará</option>
        <option value="distrito-federal">Distrito Federal</option>
        <option value="espirito-santo">Espírito Santo</option>
        <option value="goias">Goiás</option>
        <option value="maranhao">Maranhão</option>
        <option value="mato-grosso">Mato Grosso</option>
        <option value="mato-grosso-do-sul">Mato Grosso do Sul</option>
        <option value="minas-gerais">Minas Gerais</option>
        <option value="para">Pará</option>
        <option value="paraiba">Paraíba</option>
        <option value="parana">Paraná</option>
        <option value="pernambuco">Pernambuco</option>
        <option value="piaui">Piauí</option>
        <option value="rio-de-janeiro">Rio de Janeiro</option>
        <option value="rio-grande-do-norte">Rio Grande do Norte</option>
        <option value="rio-grande-do-sul">Rio Grande do Sul</option>
        <option value="rondonia">Rondônia</option>
        <option value="roraima">Roraima</option>
        <option value="santa-catarina">Santa Catarina</option>
        <option value="sao-paulo">São Paulo</option>
        <option value="sergipe">Sergipe</option>
        <option value="tocantins">Tocantins</option>
      </Form.Select>
    </Container>
  );
};
