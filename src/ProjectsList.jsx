import ProjectCard from "./ProjectCard";
import { project_data } from "./portfolioData";


function ProjectsList() {
    const projects = project_data.map((project) => (
        <ProjectCard key={project.id} project={project}/>
    ))
    return (
        <div className="projects-list">
            <h1 id="project-main-title">My Current Projects</h1>
            {projects}
        </div>
    )
}

export default ProjectsList;