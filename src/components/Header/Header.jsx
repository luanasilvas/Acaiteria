import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import styles from "./Header.module.css";
//tive que pegar uma navbar direto do bootsrap(falta adaptar as necessidaes e mais opções)
export function Header(props) {
  return (
    <Navbar id="menu" expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link} className={styles.linkmenu} to="#">
          Lanes
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/" className={styles.linkmenu}>
              HOME
            </Nav.Link>
            <Nav.Link as={Link} className={styles.linkmenu} to="/help">
              Ajuda
            </Nav.Link>
            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              <NavDropdown.Item as={HashLink} smooth to="/#mangdestaq">
              Mais vendidos
              </NavDropdown.Item>
              <NavDropdown.Item as={HashLink} smooth to="/#prodestaq">
                Destaques
              </NavDropdown.Item>
              {<NavDropdown.Divider />}
              <NavDropdown.Item as={HashLink} smooth to="#ainda-não-temos">
                Action figures
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Cultura Geek
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

/*import { Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './Header/Header.module.css'
export function Header(props) {
    return (
      <>
      <nav className="navbar col-12 navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid col-11 m-auto">
            <Link className="navbar-brand" to="#">Lines</Link>
            <Button className="navbar-toggler" type="Button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </Button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                  <Link className="Navlink active" aria-current="page" to="#">Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link classname="Navlink" to="#">Sobre</Link>
                </li>
                <li class="nav-item dropdown">
                  <Link className="Navlink dropdown-toggle" to="#" role="Button" data-bs-toggle="dropdown" aria-expanded="false">
                    Contato
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="#">Instagram</Link></li>
                    <li><Link className="dropdown-item" to="#">Twiter</Link></li>
                    <li><Link className="dropdown-divider"/></li>
                    <li><Link className="dropdown-item" to="#">Chat</Link></li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Buscar..." aria-label="Buscar"/>
                <Button className="btn btn-outline-success" type="submit">Buscar</Button>
              </form>
            </div>
          </div>
        </nav>
        </>
    
    )
  }
  */
