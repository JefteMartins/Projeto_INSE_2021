import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { DropdownButtonHome } from "../DropdownButtonHome";
import { TextoIndicativo } from "./styles";

export const NavbarHome = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>

          <Navbar.Brand>
            Indicador de Nível Socioeconomico 2021
          </Navbar.Brand>

          <Navbar id="basic-navbar-nav">
            <Nav className="me-auto">
              <TextoIndicativo>Pesquisa customizada:</TextoIndicativo>
              <DropdownButtonHome />
            </Nav>
          </Navbar>
          
      </Container>
    </Navbar>
  );
};
