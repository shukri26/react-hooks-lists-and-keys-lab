import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projects.map((Card) => (
            <ProjectItem key={Card.id} name={Card.name} about={Card.about} technologies={Card.technologies}/>
        ))}
      </div>
    </div>
  );
}

export default ProjectList;