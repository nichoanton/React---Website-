import { Route, Redirect } from "react-router-dom";

import { Container } from "react-bootstrap";
import Home from "./components/Pages/Home/1Home";
import Pricing from "./components/Pages/Pricing/2Pricing";
import MainHeader from "./components/layout/MainHeader";
import Support from "./components/Pages/Support/3support";
import TableContent from "./components/layout/TableContent";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Container fluid="lg">
      <header>
        <MainHeader />
      </header>
      <main>
        <Route path="/" exact>
          <Redirect to="/Home"/>
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/Pricing">
          <Pricing />
        </Route>
        <Route path="/Support">
          <Support />
        </Route>
      </main>
      <div>
        <TableContent />
      </div>
      <footer>
        <Footer />
      </footer>
    </Container>
  );
}

export default App;
