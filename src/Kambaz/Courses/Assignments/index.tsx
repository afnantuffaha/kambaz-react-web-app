import AssignmentControls from "./AssignmentsControls";
import { ListGroup } from "react-bootstrap";
import { BsGripVertical, BsClipboardCheck } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setAssignments, deleteAssignment } from "./reducer";
import * as assignmentsClient from "./client";

export default function Assignments() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer || { assignments: [] });

  const fetchAssignments = async () => {
    if (!cid) return;
    try {
      const assignments = await assignmentsClient.findAssignmentsForCourse(cid);
      dispatch(setAssignments(assignments));
    } catch (error) {
      console.error("Error fetching assignments:", error);
    }
  };

  useEffect(() => {
    fetchAssignments();
  }, [cid]);

  const handleDeleteAssignment = async (assignmentId: string) => {
    try {
      console.log("Deleting assignment:", assignmentId);
      await assignmentsClient.deleteAssignment(assignmentId);
      console.log("Assignment deleted from server");
      dispatch(deleteAssignment(assignmentId));
      console.log("Assignment removed from Redux state");
    } catch (error) {
      console.error("Error deleting assignment:", error);
      alert("Failed to delete assignment. Please try again.");
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
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
          </div>
                    
          {assignments.map((assignment: any) => (
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
                      <strong>Not available until</strong> {formatDate(assignment.availableFrom)} |{" "}
                      <strong>Due</strong> {formatDate(assignment.dueDate)} | {assignment.points} pts
                    </p>
                  </div>
                  <div className="ms-auto">
                    <AssignmentControlButtons 
                      assignmentId={assignment._id}
                      deleteAssignment={handleDeleteAssignment}
                    />
                  </div>
                </div>
              </ListGroup.Item>
            </ListGroup>
          ))}
                    
          {assignments.length === 0 && (
            <ListGroup.Item className="p-3 text-center text-muted">
              No assignments found for this course.
            </ListGroup.Item>
          )}
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}