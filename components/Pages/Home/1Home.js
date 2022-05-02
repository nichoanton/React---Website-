import Carouselimages from "./carousel";

import "bootstrap/dist/css/bootstrap.min.css";
import Maincontent from "./Maincontent";
import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <Carouselimages />
      <Maincontent />
    </Fragment>
  );
};

export default Home;
