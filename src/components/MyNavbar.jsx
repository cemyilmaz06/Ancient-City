import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/image.png";
import { useState } from "react";

function MyNavbar({ onChange }) {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    if (onChange) {
      onChange(searchTerm);
    }
  };
  return (
    <Navbar expand="lg" className="nav ">
      <Container>
        <img className="navImg" src={logo} alt="img" width={100} />

        <Nav>
          <Nav.Link className="navLink" href="#action1">
            Antik Gezgin
          </Nav.Link>
        </Nav>

        <Form className="d-flex form">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={handleChange}
          />

          <Button variant="outline-success">Ara</Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
