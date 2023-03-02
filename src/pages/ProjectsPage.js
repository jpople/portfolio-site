import {Container, Col} from 'react-bootstrap';
import projectList from './projects/ProjectList';
import ProjectCard from './projects/ProjectCard';

export default function ProjectPage() {
    return (
      <Container className="App-header flex-fill align-items-center justify-content-center">
        <Col className="col-8 justify-content-center">
            {projectList.map((project) => (
                <ProjectCard projectInfo={project} key={project.title} />
            ))}
        </Col>
      </Container>
    );
}