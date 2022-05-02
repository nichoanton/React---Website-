import { Col, Row, Container } from "react-bootstrap";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <Container className="container">
      <Row>
        <Col sm md={7} className={classes.logo}>
          <a href="https://www.yourtrucktax.com/">YourTruckTax.com</a>
        </Col>
        <Col sm={8} md={5} className={classes.contact}>
          <a href="tel: (999) 999-999">(972) 886-5054</a>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
