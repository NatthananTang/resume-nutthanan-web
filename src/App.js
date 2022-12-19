import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function App() {
  return (
    <Container className="container-detail">
      <Row>
        <Col xs={12} md={6} className="text-center">
          <Image src={"photo-profire.jpg"} roundedCircle width={200} />
        </Col>
        <Col xs={12} md={6}>
          <Row>
            <Col xs={12} md={12}>
              <label>
                Back-end devaloper. Experience in C# web devalopment.
                understanding the basic html, css and jquery
              </label>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} className="text-center">
          <h3>Nutthanan Yaonopas</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
