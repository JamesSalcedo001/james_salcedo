
function ProjectCard({project}) {
    const {title, image, github_link, live_site, description, tech_stack} = project
    return (
        <div className="card">
            <img className="card-image" src={image} alt={title}/>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>Tech Stack: {tech_stack}</p>
            { github_link ?  <a href={github_link} className="button-project" target="_blank" rel="noopener noreferrer">GitHub</a> : ""}
            <a href={live_site} className="button-project" target="_blank" rel="noopener noreferrer">Deployed Site</a>
        </div>
    )
}

export default ProjectCard;