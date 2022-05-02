import { Fragment } from "react";
import Navigationbar from "./Navbar";
import Header from "./Header";

const MainHeader = () => {
  return (
    <Fragment>
      <Header />
      <Navigationbar />
    </Fragment>
  );
};

export default MainHeader;
