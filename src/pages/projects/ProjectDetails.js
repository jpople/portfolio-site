import {Container, Col} from 'react-bootstrap';

export default function ProjectDetails({projectDetails}) {
    const videoEmbed = (
      <div className="w-100 embed-responsive embed-responsive-16by9">
                <video className="embed-responsive-item w-100" src={projectDetails.videoLink} autoPlay={true} muted={true} loop={true}></video>
      </div>
    );
    return (
      <Container className="App-header flex-fill align-items-center justify-content-center">
        <Col className="col-md-8 justify-content-center">
          <div className="mt-4 p-4 rounded" style={{backgroundColor: "rgba(10, 10, 10, 0.7)"}}>
            {projectDetails.videoLink && videoEmbed}
            <h1>{projectDetails.title}</h1>
            <div className='mt-2 d-flex flex-row align-items-end justify-content-around'>
                    {projectDetails.playLink && <p><a href={projectDetails.playLink}>[play]</a></p>}
                    <p><a href={projectDetails.sourceLink}>[source code]</a></p>
                </div>
            {projectDetails.pageText}
            <p><a href="/projects">[back to projects]</a></p>
          </div>
        </Col>
      </Container>
    );
}