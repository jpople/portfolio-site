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
              I made this site!  There are pages for it and some other (arguably more interesting) things I've made are over in <a href="/projects">[projects]</a> where you can look at them, try them out, and read some of my thoughts about them.
            </p>
          </div>
        </Col>
      </Container>
    );
  }