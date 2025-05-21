import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";

export default function TOC() {
  const location = useLocation(); // Get the current path

  return (
    <Nav variant="pills">
      <Nav.Item>
        <Nav.Link
          to="/Labs"
          as={Link}
          className={location.pathname === "/Labs" ? "bg-primary text-white" : ""}
        >
          Labs
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          to="/Labs/Lab1"
          as={Link}
          className={location.pathname === "/Labs/Lab1" ? "bg-primary text-white" : ""}
        >
          Lab 1
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          to="/Labs/Lab2"
          as={Link}
          className={location.pathname === "/Labs/Lab2" ? "bg-primary text-white" : ""}
        >
          Lab 2
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          to="/Labs/Lab3"
          as={Link}
          className={location.pathname === "/Labs/Lab3" ? "bg-primary text-white" : ""}
        >
          Lab 3
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          to="/Kambaz"
          as={Link}
          className={location.pathname === "/Kambaz" ? "bg-primary text-white" : ""}
        >
          Kambaz
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="https://github.com/afnantuffaha/kambaz-react-web-app">My GitHub</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}