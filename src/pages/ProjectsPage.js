import {Container, Col} from 'react-bootstrap';

export default function() {
    return (
      <Container className="App-header flex-fill align-items-center justify-content-center">
        <Col className="col-6 justify-content-center">
          <div className="p-4 rounded" style={{backgroundColor: "rgba(10, 10, 10, 0.7)"}}>
          </div>
        </Col>
      </Container>
    );
}