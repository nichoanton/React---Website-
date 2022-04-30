import Header from "./Header";
import Navigationbar from "./Navbar";
import Carouselimages from "./carousel";

import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from "react";
import { Container } from "react-bootstrap";
import Maincontent from "./Maincontent";
import TableContent from "./TableContent";

const Home = () => {
  return (
    <Container fluid="md">
      <Fragment>
        <Header />
        <Navigationbar />
        <Carouselimages />
        <Maincontent />
        <TableContent />
      </Fragment>
    </Container>
  );
};

export default Home;
