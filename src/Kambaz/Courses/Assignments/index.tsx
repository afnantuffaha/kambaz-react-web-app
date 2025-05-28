import AssignmentControls from "./AssignmentsControls";
import { ListGroup } from "react-bootstrap";
import { BsGripVertical, BsClipboardCheck } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === cid
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

      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroup.Item className="wd-assignment p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS <AssignmentControlButtons />
          </div>
          
          {courseAssignments.map((assignment) => (
            <ListGroup key={assignment._id} className="wd-lessons rounded-0">
              <ListGroup.Item className="wd-lesson p-3 ps-1">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <BsClipboardCheck className="me-3 fs-3 text-success" />
                  <Link
                    to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                    className="wd-assignment-link text-decoration-none text-dark"
                  >
                    <strong className="fs-5">{assignment.title}</strong>
                  </Link>
                  <div className="ms-auto">
                    <LessonControlButtons />
                  </div>
                </div>
                <p className="mt-2 mb-0 ps-5">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <strong>Not available until</strong> {formatDate(assignment.availableDate)} |{" "}
                  <strong>Due</strong> {formatDate(assignment.dueDate)} | {assignment.points} pts
                </p>
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