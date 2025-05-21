// export default function AssignmentEditor() {
//     return (
//       <div id="wd-assignments-editor">
//         <label htmlFor="wd-name">Assignment Name</label><br />
//         <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        
//         <textarea id="wd-description">
//           The assignment is available online. Submit a link to the landing page of your Web application running on Netlify.
//         </textarea><br /><br />
        
//         <table>
//           <tr>
//             <td align="right" valign="top">
//               <label htmlFor="wd-points">Points</label>
//             </td>
//             <td>
//               <input id="wd-points" value={100} />
//             </td>
//           </tr>
//           <br />
//           <tr>
//             <td align="right" valign="top">
//                 <label htmlFor="wd-assignment-group">Assignment Group</label>
//             </td>
//             <td>
//                 <select id="wd-group">
//                     <option value="Assignments">Assignments</option>
//                     <option value="Quizzes">Quizzes</option>
//                     <option value="Exams">Exams</option>
//                     <option value="Projects">Projects</option>
//                 </select>
//             </td>
//           </tr>
//           <br />
//           <tr>
//             <td align="right" valign="top">
//                 <label htmlFor="wd-display-grade-as">Display Grade As</label>
//             </td>
//             <td>
//                 <select id="wd-display-grade-as">
//                     <option value="Percentage">Percentage</option>
//                     <option value="Points">Points</option>
//                     <option value="Letter Grade">Letter Grade</option>
//                     <option value="Complete/Incomplete">Complete/Incomplete</option>
//                 </select>
//             </td>
//           </tr>
//           <br />
//           <tr>
//             <td align="right" valign="top">
//                 <label htmlFor="wd-submission-type">Submission Type</label>
//             </td>
//             <td>
//                 <select id="wd-submission-type">
//                     <option value="Online">Online</option>
//                     <option value="On Paper">On Paper</option>
//                     <option value="No Submission">No Submission</option>
//                 </select>
//             </td>
//           </tr>
//           <br />
//           <tr>
//             <td align="right" valign="top">
//                 <label htmlFor="wd-online-entry-options">Online Entry Options</label>
//             </td>
//             <td>
//                 <input type="checkbox" id="wd-text-entry" />
//                 <label htmlFor="wd-text-entry">Text Entry</label><br />
//                 <input type="checkbox" id="wd-website-url" />
//                 <label htmlFor="wd-website-url">Website URL</label><br />
//                 <input type="checkbox" id="wd-media-recordings" />
//                 <label htmlFor="wd-media-recordings">Media Recordings</label><br />
//                 <input type="checkbox" id="wd-student-annotation" />
//                 <label htmlFor="wd-student-annotation">Student Annotation</label><br />
//                 <input type="checkbox" id="wd-file-upload" />
//                 <label htmlFor="wd-file-upload">File Uploads</label><br />
//             </td>
//           </tr>
//           <br />
//           <tr>
//             <td align="right" valign="top">
//                 <label htmlFor="wd-assign-to">Assign to</label>
//             </td>
//             <td>
//               <input id="wd-assign-to" value={"Everyone"} />
//             </td>
//           </tr>
//           <br />
//           <tr>
//             <td align="right" valign="top">
//                 <label htmlFor="wd-due-date">Due Date</label>
//             </td>
//             <td>
//                 <input id="wd-due-date" type="date" defaultValue="2025-05-13" />
//             </td>
//           </tr>
//           <br />
//           <tr>
//             <td align="right" valign="top">
//                 <label htmlFor="wd-available-from">Available From</label>
//             </td>
//             <td>
//               <input id="wd-available-from" type="date" defaultValue="2025-05-06" />
//             </td>
//           </tr>
//           <br />
//           <tr>
//             <td align="right" valign="top">
//                 <label htmlFor="wd-available-until">Available Until</label>
//             </td>
//             <td>
//               <input id="wd-available-until" type="date" defaultValue="2025-05-20" />
//             </td>
//           </tr>
//           <br />
//         <tr>
//             <td align="right" valign="top">
//                 <label htmlFor="wd-buttons"></label>
//             </td>
//           <button id="wd-cancel-button">Cancel</button>
//           <button id="wd-save-button" style={{ marginLeft: "10px" }}>Save</button>
//         </tr>
//         </table>
//       </div>
//   );
// }

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

export default function AssignmentEditor() {
  return (
    <Container className="mt-4" id="wd-assignments-editor">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control
            type="text"
            id="wd-name"
            defaultValue="A1 - ENV + HTML"
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Control
            as="textarea"
            id="wd-description"
            rows={10}
            defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:

• Your full name and section
• Links to each of the lab assignments
• Link to the Kanbas application
• Links to all relevant source code repositories

The Kanbas application should include a link to navigate back to the landing page."
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
              defaultValue={100}
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
              defaultValue="Assignments"
            >
              <option value="Assignments">ASSIGNMENTS</option>
              <option value="Quizzes">QUIZZES</option>
              <option value="Exams">EXAMS</option>
              <option value="Projects">PROJECTS</option>
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
                  defaultValue="Online"
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
                    defaultValue="2025-05-13"
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
                        defaultValue="2025-05-06"
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
                        defaultValue="2025-05-20"
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
            <Button variant="light" id="wd-cancel-button" className="me-2">
              Cancel
            </Button>
            <Button variant="danger" id="wd-save-button">
              Save
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}