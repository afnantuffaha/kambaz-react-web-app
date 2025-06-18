// src/Kambaz/Courses/Assignments/AssignmentsControls.tsx
import { Button, Form, InputGroup } from "react-bootstrap";
import { BsSearch, BsPlus } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AssignmentControls() {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";

  return (
    <div id="wd-assignments-controls" className="mb-4 d-flex justify-content-between">
      <InputGroup style={{ width: "300px" }}>
        <InputGroup.Text className="bg-white">
          <BsSearch />
        </InputGroup.Text>
        <Form.Control
          placeholder="Search for Assignment"
          aria-label="Search for Assignment"
        />
      </InputGroup>

      {isFaculty && (
        <div>
          <Button variant="secondary" size="lg" className="ms-2">
            <BsPlus className="me-2" />
            Group
          </Button>
          <Link 
            to={`/Kambaz/Courses/${cid}/Assignments/new`}
            className="btn btn-danger btn-lg ms-2"
          >
            <BsPlus className="me-2" />
            Assignment
          </Link>
        </div>
      )}
    </div>
  );
}