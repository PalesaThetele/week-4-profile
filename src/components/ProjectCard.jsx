function ProjectCard({ title, category, description, technologies }) {
    return (
        <article className="project-card">
            <span className="project-category">{category}</span>

            <h3>{title}</h3>

            <p>{description}</p>

            <div className="technologies">
                {technologies.map((technology) => (
                    <span key={technology}>
                        {technology}
                    </span>
                ))}
            </div>
        </article>
    );
}

export default ProjectCard;
