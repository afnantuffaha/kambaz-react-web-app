import { 
  Form, 
  Container, 
  Row, 
  Col, 
  Button, 
  Card,
  InputGroup
} from "react-bootstrap";
import { BsX } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  
  const assignment = assignments.find((assignment) => assignment._id === aid);
  
  const formatDateForInput = (dateString: string) => {
    return new Date(dateString).toISOString().split('T')[0];
  };

  if (!assignment) {
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
            defaultValue={assignment.title}
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Control
            as="textarea"
            id="wd-description"
            rows={10}
            defaultValue={assignment.description}
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
              defaultValue={assignment.points}
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
              defaultValue={assignment.assignmentGroup}
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
                  defaultValue={assignment.submissionType}
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
                    defaultValue={formatDateForInput(assignment.dueDate)}
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
                        defaultValue={formatDateForInput(assignment.availableFrom)}
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
                        defaultValue={formatDateForInput(assignment.availableUntil)}
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
            <Link 
              to={`/Kambaz/Courses/${cid}/Assignments`}
              className="btn btn-light me-2"
              id="wd-cancel-button"
            >
              Cancel
            </Link>
            <Link 
              to={`/Kambaz/Courses/${cid}/Assignments`}
              className="btn btn-danger"
              id="wd-save-button"
            >
              Save
            </Link>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}