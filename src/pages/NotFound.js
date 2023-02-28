import {Container, Col} from 'react-bootstrap';

export default function NotFoundPage() {
    return (
        <Container className="App-header flex-fill align-items-center justify-content-center">
        <Col className="col-6 justify-content-center">
          <div className="p-4 rounded" style={{backgroundColor: "rgba(10, 10, 10, 0.7)"}}>
            <h1>Not Found</h1>
            <p>If you were hoping for an Easter egg, this is all I have for you.</p>
            <p className="text-center"><a href="/">[return to homepage]</a></p>
          </div>
        </Col>
      </Container>
    )
}