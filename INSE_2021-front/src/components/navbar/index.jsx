import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AsyncSearch } from "../async-search";
import { AsyncSearchCidade } from "../async-search-cidade";
import { DropdownButtonHome } from "../DropdownButtonHome";
import { InsideContainer } from "../dropdown-estados/styles";

export const NavbarHome = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <InsideContainer>
          <Navbar.Brand>
            Indicador de Nível Socioeconomico 2021
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <DropdownButtonHome />
            </Nav>
          </Navbar.Collapse>
        </InsideContainer>
      </Container>
    </Navbar>
  );
};
