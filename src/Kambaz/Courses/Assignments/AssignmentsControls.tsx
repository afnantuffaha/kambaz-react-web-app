import { Button, Form, InputGroup } from "react-bootstrap";
import { BsSearch, BsPlus } from "react-icons/bs";

export default function AssignmentControls() {
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

      <div>
        <Button variant="secondary" size="lg" className="ms-2">
          <BsPlus className="me-2" />
          Group
        </Button>
        <Button variant="danger" size="lg" className="ms-2">
          <BsPlus className="me-2" />
          Assignment
        </Button>
      </div>
    </div>
  );
}