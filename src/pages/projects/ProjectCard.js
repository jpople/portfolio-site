export default function ProjectCard({projectInfo}) {
    return (
        <div className="my-3 p-4 rounded d-flex flex-column flex-lg-row" style={{backgroundColor: "rgba(10, 10, 10, 0.7)"}}>
            <div className="p-2 project-image d-flex flex-column justify-content-center">
                <img src={projectInfo.screenshotSrc} alt={`A screenshot from ${projectInfo.title}`} className="w-100 rounded"/>
            </div>
            <div className="mx-lg-4 d-flex flex-column justify-content-center project-info">
                <h1><a href={projectInfo.infoLink}>{projectInfo.title}</a></h1>
                {projectInfo.desc}
                <div className='d-flex flex-row align-items-end justify-content-around'>
                    {projectInfo.playLink && <p><a href={projectInfo.playLink} target="_blank" rel="noreferrer noopener">[{projectInfo.playText}]</a></p>}
                    <p><a href={projectInfo.infoLink}>[more info]</a></p>
                </div>
            </div>
        </div>
    );
}


