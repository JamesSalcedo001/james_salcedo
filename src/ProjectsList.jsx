import ProjectCard from "./ProjectCard";
import { project_data } from "./portfolioData";


function ProjectsList() {
    const projects = project_data.map((project) => (
        <ProjectCard key={project.id} project={project}/>
    ))
    return (
        <div>
            {projects}
        </div>
    )
}

export default ProjectsList;