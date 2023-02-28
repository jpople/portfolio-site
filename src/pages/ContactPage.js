import {Container, Col} from 'react-bootstrap';

export default function ContactPage() {
    return (
      <Container className="App-header flex-fill align-items-center justify-content-center">
        <Col className="col-6 justify-content-center">
          <div className="p-4 rounded" style={{backgroundColor: "rgba(10, 10, 10, 0.7)"}}>
            <h1>Contact</h1>
            <p>
              If you'd like to work with me, ask a question, or just say hello, you can <a href="mailto:jpople@gmail.com">[email me]</a> or look at my profiles in any of the following places:
            </p>
            <div className='d-flex align-items-center justify-content-around'>
              <p><a href="https://www.linkedin.com/in/jeremy-pople/">[linkedin]</a></p>
              <p><a href="https://github.com/jpople">[github]</a></p>
              <p><a href="https://auartic.itch.io/">[itch.io]</a></p>
            </div>
          </div>
        </Col>
      </Container>
    );
  }