import "./App.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useReducer } from "react";

const reducer = (count, action) => {
  switch (action.type) {
    case "up":
      return ++count;
    case "down":
      if(count !=0){
        count--
      }
      return count;
    case "reset":
      return 0;
    default:
      return count;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="App">
      <Container>
        <Row className="text-center">
          <h1>Counter</h1>
        </Row>
        <Row className="text-center">
          <div className="m-4">{count}</div>
        </Row>
        <Row>
          <Col>
            <Button
              onClick={() => dispatch({ type: "up" })}
              className="float-end">
              Hochzählen
            </Button>
          </Col>

          <Col className="text-center">
            <Button onClick={() => dispatch({ type: "down" })}>
              Runterzählen
            </Button>
          </Col>

          <Col>
            <Button onClick={() => dispatch({ type: "reset" })}>Reset</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
