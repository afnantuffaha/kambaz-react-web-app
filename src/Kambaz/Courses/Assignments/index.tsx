// src/Kambaz/Courses/Assignments/index.tsx
import AssignmentControls from "./AssignmentsControls";
import { ListGroup } from "react-bootstrap";
import { BsGripVertical, BsClipboardCheck } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer || { assignments: [] });

  const courseAssignments = assignments.filter(
    (assignment: any) => assignment.course === cid
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div id="wd-assignments">
      <AssignmentControls />
      <br />

      <ListGroup className="rounded-0" id="wd-assignments-list">
        <ListGroup.Item className="wd-assignment p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS
            {/* Removed AssignmentControlButtons from header to fix infinite loop */}
          </div>
          
          {courseAssignments.map((assignment: any) => (
            <ListGroup key={assignment._id} className="wd-lessons rounded-0">
              <ListGroup.Item className="wd-lesson p-3 ps-1">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <BsClipboardCheck className="me-3 fs-3 text-success" />
                  <div className="flex-grow-1">
                    <Link
                      to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                      className="wd-assignment-link text-decoration-none text-dark"
                    >
                      <strong className="fs-5">{assignment.title}</strong>
                    </Link>
                    <p className="mt-2 mb-0">
                      <span className="text-danger">Multiple Modules</span> |{" "}
                      <strong>Not available until</strong> {formatDate(assignment.availableDate || assignment.availableFrom)} |{" "}
                      <strong>Due</strong> {formatDate(assignment.dueDate)} | {assignment.points} pts
                    </p>
                  </div>
                  <div className="ms-auto">
                    <AssignmentControlButtons assignmentId={assignment._id} />
                  </div>
                </div>
              </ListGroup.Item>
            </ListGroup>
          ))}
          
          {courseAssignments.length === 0 && (
            <ListGroup.Item className="p-3 text-center text-muted">
              No assignments found for this course.
            </ListGroup.Item>
          )}
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}