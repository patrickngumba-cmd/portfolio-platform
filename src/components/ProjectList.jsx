function ProjectList({ projects }) {
    return (
        <div className="project-list">
            {/* If projects is empty or not an array, this map would fail without a check */}
            {Array.isArray(projects) && projects.map((project) => (
                <div key={project.id} className="project-item">
                    <div className="image-placeholder">X</div>
                    <div className="project-info">
                        <h4>{project.title}</h4>
                        <p>{project.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProjectList;