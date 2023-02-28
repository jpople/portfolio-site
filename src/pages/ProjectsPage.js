import {Container, Col} from 'react-bootstrap';
import phiiScreenshot from '../images/pipe-hacker-screenshot.png';
import usgScreenshot from '../images/sword-game-screenshot.png';
import aquaScreenshot from '../images/aquarium-screenshot.png';
import siteScreenshot from '../images/site-screenshot-1.png';

export default function ProjectPage() {
    return (
      <Container className="App-header flex-fill align-items-center justify-content-center">
        <Col className="col-8 justify-content-center">
            <div className="my-3 p-4 rounded d-flex flex-column flex-lg-row" style={{backgroundColor: "rgba(10, 10, 10, 0.7)"}}>
                <div className="p-2 w-50">
                    <img src={usgScreenshot} alt="A screenshot from Untitled Sword Game" className="w-100 rounded"/>
                </div>
                <div className="mx-4 d-flex flex-column justify-content-center">
                    <h1>Untitled Sword Game</h1>
                    <p>A proof-of-concept for a Unity sidescroller, featuring custom physics and combat that incorporates a posture mechanic based on <i>Sekiro: Shadows Die Twice</i>.</p>
                    <div className='d-flex flex-row align-items-end justify-content-around'>
                        <p><a href="#play">[play]</a></p>
                        <p><a href="#about">[more info]</a></p>
                    </div>
                </div>
            </div>
            <div className="my-3 p-4 rounded d-flex flex-column flex-lg-row" style={{backgroundColor: "rgba(10, 10, 10, 0.7)"}}>
                <div className="p-2 w-50">
                    <img src={phiiScreenshot} alt="A screenshot from Pipe Hacker II" className="w-100 rounded"/>
                </div>
                <div className="mx-4 d-flex flex-column justify-content-center">
                    <h1>Pipe Hacker II</h1>
                    <p>My first Unity project: a version of the NES classic <i>Pipe Dream</i>, or as I knew it when I named this project, the hacking minigame from <i>BioShock</i>.</p>
                    <div className='d-flex flex-row align-items-end justify-content-around'>
                        <p><a href="https://auartic.itch.io/pipe-hacker-ii">[play]</a></p>
                        <p><a href="#about">[more info]</a></p>
                    </div>
                </div>
            </div>
            <div className="my-3 p-4 rounded d-flex flex-column flex-lg-row" style={{backgroundColor: "rgba(10, 10, 10, 0.7)"}}>
                <div className="p-2 w-50">
                    <img src={siteScreenshot} alt="A screenshot of jeremypople.dev" className="w-100 rounded"/>
                </div>
                <div className="mx-4 d-flex flex-column justify-content-center">
                    <h1>jeremypople.dev</h1>
                    <p>The page you're currently reading. This site was implemented in React and styled mostly using customized Bootstrap.</p>
                    <div className='d-flex flex-row align-items-end justify-content-around'>
                        <p><a href="/">[play?]</a></p>
                        <p><a href="#about">[more info]</a></p>
                    </div>
                </div>
            </div>
            <div className="my-3 p-4 rounded d-flex flex-column flex-lg-row" style={{backgroundColor: "rgba(10, 10, 10, 0.7)"}}>
                <div className="p-2 w-50">
                    <img src={aquaScreenshot} alt="A screenshot of ReactAquarium" className="w-100 rounded"/>
                </div>
                <div className="mx-4 d-flex flex-column justify-content-center">
                    <h1>ReactAquarium</h1>
                    <p>A (lightly) updated version of an old project: a React interface for solving Aquarium, a cute little genre of pen-and-paper logic puzzle that I'm very fond of.</p>
                    <div className='d-flex flex-row align-items-end justify-content-around'>
                        <p><a href="/aquarium">[play]</a></p>
                        <p><a href="#about">[more info]</a></p>
                    </div>
                </div>
            </div>
        </Col>
      </Container>
    );
}