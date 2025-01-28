import { useState } from "react";
import myData from "../../db.json";
import "./ProjectContainer.css";
import { CommitsContainer } from "@components/CommitsContainer";

export function ProjectContainer() {
  const [activeTab, setActiveTab] = useState(0);
  const [projectItems, setProjectItems] = useState(myData);
  return (
    <div className="project-container">
      {projectItems.projects.map((project) => (
        <div key={project.id}>
          <h2>header {project.name}</h2>
          <p>Description: {project.description}</p>
          <div>Total Time: {project.totalTime}</div>
          <CommitsContainer projectId={project.id} />
        </div>
      ))}
    </div>
  );
}
