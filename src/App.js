import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

// Icon
import { BsFillPinMapFill } from "react-icons/bs";

function App() {
  return (
    <Container className="container-detail">
      <Row>
        <Col xs={12} md={6}>
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
        <Col xs={12} md={6}>
          <h3>Nutthanan Yaonopas</h3>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <label>Programmer</label>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <BsFillPinMapFill></BsFillPinMapFill> <label>Bangkok, Bung Sue</label>
        </Col>
      </Row>

      <hr></hr>

      <Row>
        <Col xs={12} md={12}>
          <h4>Skills</h4>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <label>- Html</label>
          <br></br>
          <label>- Bootstrap</label>
          <br></br>
          <label>- Css</label>
          <br></br>
          <label>- Jquery</label>
          <br></br>
          <label>- React.js</label>
          <br></br>
          <label>- C# .NET Core</label>
          <br></br>
          <label>- Sql (sql server)</label>
        </Col>
      </Row>

      <hr></hr>

      <Row>
        <Col xs={12} md={12}>
          <h4>Experience</h4>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
        <label>3 years working experience in c# development in Generwiz Co., Ltd. company</label>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
