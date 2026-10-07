import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
    if (projects.length === 0) {
        return (
            <p className="no-results">
                No projects found in this category.
            </p>
        );
    }

    return (
        <div className="project-grid">
            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    category={project.category}
                    description={project.description}
                    technologies={project.technologies}
                />
            ))}
        </div>
    );
}

export default ProjectList;
