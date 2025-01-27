import { useState } from "react";
import myData from "../../db.json";
import "./ProjectContainer.css";

export function ProjectContainer({ name }) {
  const [activeTab, setActiveTab] = useState(0);
  const [projectItems, setProjectItems] = useState(myData);
  return (
    <div className="project-container">
      {projectItems.projects.map((project) => (
        <div key={project.id}>
          <h3> header {project.name}</h3>
          <p>Description: {project.description}</p>
        </div>
      ))}

      {/* {projectItems.projects.map((project) => (
        <div key={project.id} className="project-card">
          {/* <h3>{project.name}</h3>
          <p>Description: {project.description}</p>
          <p>Status: {project.status}</p>
          <p>Architecture: {project.architecture}</p>
          <div>Tags: {project.tags.join(", ")}</div>
          <div>Total Time: {project.totalTime}</div> */}

      {/* <h4>Commits</h4>
            {projectItems.commits
              .filter((commit) => commit.parentProjectId === project.id)
              .map((commit) => (
                <div key={commit.id} className="commit">
                  <p>Message: {commit.message}</p>
                  <p>Time Spent: {commit.timeSpent}</p>
                </div>
              ))} */}
    </div>
  );
  // <div className="tab-container">
  //   <div className="tab-header">
  //     {myData.map((child, index) => (
  //       <TabButton
  //         key={index}
  //         isActive={index === activeTab}
  //         onClick={() => setActiveTab(index)}
  //       >
  //         {child.props.name || `Tab ${index + 1}`}
  //       </TabButton>
  //     ))}
  //   </div>
  //   <div className="tab-content">{children[activeTab]}</div>
  // </div>
}
