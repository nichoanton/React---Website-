import { Nav } from "react-bootstrap";
import classes from './Navbar.module.css';
import "bootstrap/dist/css/bootstrap.min.css";

const Navigationbar = () => {
  return (
    <div className={classes.navigation}>
      <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link className={classes.links} href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className={classes.links} eventKey="link-1">Pricing</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className={classes.links} eventKey="link-2">Support</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className={classes.links} eventKey="link-3">Sign in</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className={classes.links} eventKey="link-4">Try for free</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className={classes.links}eventKey="link-5">About us</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Navigationbar;
