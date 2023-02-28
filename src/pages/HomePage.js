import {Container, Col} from 'react-bootstrap';

export default function HomePage() {
    return (
      <Container className="App-header flex-fill align-items-center justify-content-center">
        <Col className="col-6 justify-content-center">
          <div className="p-4 rounded" style={{backgroundColor: "rgba(10, 10, 10, 0.7)"}}>
            <h1>Hello!</h1>
            <p className="pt-2">
              I'm Jeremy Pople, a front-end web and game developer based in Pittsburgh, PA. 
            </p>
            <p>
              I made this site!  You can use it to look at, try out, and read what I have to say about some other, arguably more interesting things I've made over in <a href="/projects">[projects]</a>.
            </p>
          </div>
        </Col>
      </Container>
    );
  }