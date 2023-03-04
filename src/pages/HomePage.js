import {Container, Col} from 'react-bootstrap';

export default function HomePage() {
    return (
      <Container className="App-header flex-fill align-items-center justify-content-center">
        <Col className="col-sm-6 justify-content-center">
          <div className="mt-4 p-4 rounded" style={{backgroundColor: "rgba(10, 10, 10, 0.7)"}}>
            <h1>Hello!</h1>
            <p className="pt-2">
              I'm Jeremy Pople, a front-end web and game developer based in Pittsburgh, PA. 
            </p>
            <p>
              I built this site in React!  Check out <a href="/projects">[projects]</a> to learn more about it, along with several other things that I've made that are arguably more interesting.
            </p>
            <p>Thanks for stopping by!</p>
          </div>
        </Col>
      </Container>
    );
  }