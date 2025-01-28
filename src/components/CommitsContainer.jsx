import React, { useState } from "react";
import myData from "../../db.json";
import "./CommitsContainer.css";

export function CommitsContainer({ projectId }) {
  const [projectItems, setProjectItems] = useState(myData);

  return (
    <div className="commits-container">
      <h4>Commits</h4>
      {projectItems.commits
        .filter((commit) => commit.parentProjectId === projectId)
        .map((commit) => (
          <div key={commit.id} className="commit">
            <p>Message: {commit.message}</p>
            <p>Time Spent: {commit.timeSpent}</p>
          </div>
        ))}
    </div>
  );
}
