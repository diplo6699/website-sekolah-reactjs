import { Navbar, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark" className="mt-5">
      <Container>
        <Navbar.Brand href="#home">SMK NUSANTARA 3</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Created by{" "}
            <a href="#login" className="text-decoration-none">
              Diplo6699
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Footer;
