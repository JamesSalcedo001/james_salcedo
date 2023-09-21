
function ProjectCard({project}) {
    const {title, image, github_link, live_site, description, tech_stack} = project
    console.log(project)
    return (
        <div className="card">
            <h1>{title}</h1>
            <img className="card-image" src={image} alt={title}/>
            <p>{description}</p>
            <p>Tech Stack: {tech_stack}</p>
            <a href={github_link}>GitHub</a>
            <a href={live_site}>Deployed Site</a>
        </div>
    )
}

export default ProjectCard;