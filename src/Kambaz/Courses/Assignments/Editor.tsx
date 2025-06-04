import { 
  Form, 
  Container, 
  Row, 
  Col, 
  Card,
  InputGroup,
  Button
} from "react-bootstrap";
import { BsX } from "react-icons/bs";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addAssignment, updateAssignment, setAssignment, clearAssignment } from "./reducer";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { assignments, assignment } = useSelector((state: any) => state.assignmentsReducer);
  
  useEffect(() => {
    if (aid && aid !== "new") {
      const currentAssignment = assignments.find((a: any) => a._id === aid);
      if (currentAssignment) {
        dispatch(setAssignment(currentAssignment));
      }
    } else {
      dispatch(clearAssignment());
      dispatch(setAssignment({
        ...assignment,
        course: cid,
        dueDate: new Date().toISOString().split('T')[0],
        availableFrom: new Date().toISOString().split('T')[0],
        availableUntil: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
      }));
    }
  }, [aid, cid, assignments, dispatch]);
  
  const formatDateForInput = (dateString: string) => {
    if (!dateString) return '';
    return new Date(dateString).toISOString().split('T')[0];
  };

  const handleSave = () => {
    if (aid && aid !== "new") {
      dispatch(updateAssignment(assignment));
    } else {
      dispatch(addAssignment({ ...assignment, course: cid }));
    }
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    dispatch(clearAssignment());
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  if (!assignment && aid !== "new") {
    return (
      <Container className="mt-4">
        <div className="alert alert-danger">
          Assignment not found
        </div>
        <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-secondary">
          Back to Assignments
        </Link>
      </Container>
    );
  }

  return (
    <Container className="mt-4" id="wd-assignments-editor">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control
            type="text"
            id="wd-name"
            value={assignment.title || ""}
            onChange={(e) => dispatch(setAssignment({ ...assignment, title: e.target.value }))}
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Control
            as="textarea"
            id="wd-description"
            rows={10}
            value={assignment.description || ""}
            onChange={(e) => dispatch(setAssignment({ ...assignment, description: e.target.value }))}
          />
        </Form.Group>
        
        <Row className="mb-3 align-items-center">
          <Col sm={3} md={2} className="text-sm-end">
            <Form.Label className="mb-sm-0">Points</Form.Label>
          </Col>
          <Col sm={9} md={6}>
            <Form.Control
              type="number"
              id="wd-points"
              value={assignment.points || 100}
              onChange={(e) => dispatch(setAssignment({ ...assignment, points: parseInt(e.target.value) }))}
            />
          </Col>
        </Row>

        <Row className="mb-3 align-items-center">
          <Col sm={3} md={2} className="text-sm-end">
            <Form.Label className="mb-sm-0">Assignment Group</Form.Label>
          </Col>
          <Col sm={9} md={6}>
            <Form.Select
              id="wd-group"
              value={assignment.assignmentGroup || "ASSIGNMENTS"}
              onChange={(e) => dispatch(setAssignment({ ...assignment, assignmentGroup: e.target.value }))}
            >
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECTS">PROJECTS</option>
              <option value="LABS">LABS</option>
            </Form.Select>
          </Col>
        </Row>

        <Row className="mb-3 align-items-center">
          <Col sm={3} md={2} className="text-sm-end">
            <Form.Label className="mb-sm-0">Display Grade as</Form.Label>
          </Col>
          <Col sm={9} md={6}>
            <Form.Select
              id="wd-display-grade-as"
              defaultValue="Percentage"
            >
              <option value="Percentage">Percentage</option>
              <option value="Points">Points</option>
              <option value="Letter Grade">Letter Grade</option>
              <option value="Complete/Incomplete">Complete/Incomplete</option>
            </Form.Select>
          </Col>
        </Row>

        <Row className="mb-3 align-items-start">
          <Col sm={3} md={2} className="text-sm-end">
            <Form.Label className="mb-sm-0 pt-1">Submission Type</Form.Label>
          </Col>
          <Col sm={9} md={6}>
            <Card className="border">
              <Card.Body className="p-3">
                <Form.Select
                  id="wd-submission-type"
                  value={assignment.submissionType || "Online"}
                  onChange={(e) => dispatch(setAssignment({ ...assignment, submissionType: e.target.value }))}
                  className="mb-3"
                >
                  <option value="Online">Online</option>
                  <option value="On Paper">On Paper</option>
                  <option value="No Submission">No Submission</option>
                </Form.Select>

                <div>
                  <Form.Label>Online Entry Options</Form.Label>
                  <div>
                    <Form.Check
                      type="checkbox"
                      id="wd-text-entry"
                      label="Text Entry"
                      className="mb-2"
                    />
                    <Form.Check
                      type="checkbox"
                      id="wd-website-url"
                      label="Website URL"
                      className="mb-2"
                      defaultChecked
                    />
                    <Form.Check
                      type="checkbox"
                      id="wd-media-recordings"
                      label="Media Recordings"
                      className="mb-2"
                    />
                    <Form.Check
                      type="checkbox"
                      id="wd-student-annotation"
                      label="Student Annotation"
                      className="mb-2"
                    />
                    <Form.Check
                      type="checkbox"
                      id="wd-file-upload"
                      label="File Uploads"
                    />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-4 align-items-start mt-3">
          <Col sm={3} md={2} className="text-sm-end">
            <Form.Label className="mb-sm-0">Assign</Form.Label>
          </Col>
          <Col sm={9} md={6}>
            <Card className="border">
              <Card.Body className="p-3">
                <Form.Label>Assign to</Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control
                    id="wd-assign-to"
                    defaultValue="Everyone"
                    className="border-end-0"
                  />
                  <InputGroup.Text className="bg-white border-start-0">
                    <BsX className="fs-5" />
                  </InputGroup.Text>
                </InputGroup>

                <Form.Label>Due</Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control
                    id="wd-due-date"
                    type="date"
                    value={formatDateForInput(assignment.dueDate)}
                    onChange={(e) => dispatch(setAssignment({ ...assignment, dueDate: e.target.value }))}
                  />
                  <InputGroup.Text className="bg-white">
                  </InputGroup.Text>
                </InputGroup>

                <Row>
                  <Col md={6}>
                    <Form.Label>Available from</Form.Label>
                    <InputGroup className="mb-3">
                      <Form.Control
                        id="wd-available-from"
                        type="date"
                        value={formatDateForInput(assignment.availableFrom)}
                        onChange={(e) => dispatch(setAssignment({ ...assignment, availableFrom: e.target.value }))}
                      />
                      <InputGroup.Text className="bg-white">
                      </InputGroup.Text>
                    </InputGroup>
                  </Col>
                  <Col md={6}>
                    <Form.Label>Until</Form.Label>
                    <InputGroup className="mb-3">
                      <Form.Control
                        id="wd-available-until"
                        type="date"
                        value={formatDateForInput(assignment.availableUntil)}
                        onChange={(e) => dispatch(setAssignment({ ...assignment, availableUntil: e.target.value }))}
                      />
                      <InputGroup.Text className="bg-white">
                      </InputGroup.Text>
                    </InputGroup>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col className="text-end">
            <Button 
              variant="light"
              className="me-2"
              id="wd-cancel-button"
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button 
              variant="danger"
              id="wd-save-button"
              onClick={handleSave}
            >
              Save
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}