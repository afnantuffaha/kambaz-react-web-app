import React, { useState } from "react";
import { FormControl } from "react-bootstrap";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });

  const [module, setModule] = useState({
    id: "CS5610",
    name: "Web Development", 
    description: "Learn full-stack web development with React and Node.js",
    course: "Computer Science"
  });

  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      
      {/* Assignment Section */}
      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary me-2"
         href={`${ASSIGNMENT_API_URL}`}>
        Get Assignment
      </a>
      <hr/>
      
      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary me-2"
         href={`${ASSIGNMENT_API_URL}/title`}>
        Get Title
      </a>
      <hr/>
      
      <h4>Modifying Properties</h4>
      <div className="mb-3">
        <label>Assignment Title:</label>
        <div className="input-group">
          <FormControl 
            className="form-control" 
            id="wd-assignment-title"
            defaultValue={assignment.title} 
            onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
          />
          <a id="wd-update-assignment-title"
             className="btn btn-primary"
             href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
            Update Title
          </a>
        </div>
      </div>

      <div className="mb-3">
        <label>Assignment Score:</label>
        <div className="input-group">
          <FormControl 
            type="number"
            className="form-control" 
            id="wd-assignment-score"
            defaultValue={assignment.score} 
            onChange={(e) => setAssignment({ ...assignment, score: parseInt(e.target.value) || 0 })}
          />
          <a id="wd-update-assignment-score"
             className="btn btn-primary"
             href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
            Update Score
          </a>
        </div>
      </div>

      <div className="mb-3">
        <div className="form-check">
          <input 
            type="checkbox"
            className="form-check-input" 
            id="wd-assignment-completed"
            checked={assignment.completed}
            onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })}
          />
          <label className="form-check-label" htmlFor="wd-assignment-completed">
            Assignment Completed
          </label>
          <a id="wd-update-assignment-completed"
             className="btn btn-primary ms-2"
             href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
            Update Completed
          </a>
        </div>
      </div>
      <hr/>

      {/* Module Section */}
      <h4>Working with Module Object</h4>
      
      <div className="mb-3">
        <a id="wd-retrieve-module" className="btn btn-success me-2"
           href={`${MODULE_API_URL}`}>
          Get Module
        </a>
        <a id="wd-retrieve-module-name" className="btn btn-success"
           href={`${MODULE_API_URL}/name`}>
          Get Module Name
        </a>
      </div>

      <div className="mb-3">
        <label>Module Name:</label>
        <div className="input-group">
          <FormControl 
            className="form-control" 
            id="wd-module-name"
            defaultValue={module.name} 
            onChange={(e) => setModule({ ...module, name: e.target.value })}
          />
          <a id="wd-update-module-name"
             className="btn btn-success"
             href={`${MODULE_API_URL}/name/${module.name}`}>
            Update Name
          </a>
        </div>
      </div>

      <div className="mb-3">
        <label>Module Description:</label>
        <div className="input-group">
          <FormControl 
            as="textarea"
            rows={3}
            className="form-control" 
            id="wd-module-description"
            defaultValue={module.description} 
            onChange={(e) => setModule({ ...module, description: e.target.value })}
          />
          <a id="wd-update-module-description"
             className="btn btn-success"
             href={`${MODULE_API_URL}/description/${module.description}`}>
            Update Description
          </a>
        </div>
      </div>
      <hr/>
    </div>
  );
}