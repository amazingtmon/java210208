import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <>
      <Container className="p-3">
        <Jumbotron>
          <h1 className="header">Welcome To React-Bootstrap</h1>
          <Button variant="danger">Click here</Button>
          <Button>Boot strap</Button>
        </Jumbotron>
      </Container>
    </>
  );
}

export default App;
