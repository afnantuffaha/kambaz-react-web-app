// import AssignmentControls from "./AssignmentsControls";
// import { ListGroup } from "react-bootstrap";
// import { BsGripVertical } from "react-icons/bs";
// import LessonControlButtons from "../Modules/LessonControlButtons";
// import ModuleControlButtons from "../Modules/ModuleControlButtons";
// import AssignmentControlButtons from "./AssignmentControlButtons";

// export default function Assignments() {
//     return (
//       <div id="wd-assignments">
//       <AssignmentControls/>/><br /><br /><br /><br />
//         <h3 id="wd-assignments-title">
//           ASSIGNMENTS 40% of Total <button>+</button> </h3>
//         <ul id="wd-assignment-list">
//           <li className="wd-assignment-list-item">
//             <Link to="/Kambaz/Courses/1234/Assignments/123"
//                   className="wd-assignment-link">
//               A1 - ENV + HTML
//             </Link>
//             <p>Multiple Modules | Not available until May 6 at 12:00 am | Due May 13 at 11:59pm | 100 pts</p>
//           </li>
//           <li className="wd-assignment-list-item">
//             <Link to="/Kambaz/Courses/1234/Assignments/124"
//                   className="wd-assignment-link">
//               A2 - CSS + BOOTSTRAP
//             </Link>
//             <p>Multiple Modules | Not available until May 13 at 12:00 am | Due May 20 at 11:59pm | 100 pts</p>
//           </li>
//           <li className="wd-assignment-list-item">
//             <Link to="/Kambaz/Courses/1234/Assignments/125"
//                   className="wd-assignment-link">
//               A3 - JAVASCRIPT + REACT
//             </Link>
//             <p>Multiple Modules | Not available until May 20 at 12:00 am | Due May 27 at 11:59pm | 100 pts</p>
//           </li>
//         </ul>
//       </div>
//   );
// }

import AssignmentControls from "./AssignmentsControls";
import { ListGroup } from "react-bootstrap";
import { BsGripVertical, BsClipboardCheck } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { Link } from "react-router-dom";

export default function Assignments() {
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
          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <BsClipboardCheck className="me-3 fs-3 text-success" />
                <Link
                  to="/Kambaz/Courses/1234/Assignments/123"
                  className="wd-assignment-link text-decoration-none text-dark"
                >
                  <strong className="fs-5">A1</strong>
                </Link>
                <div className="ms-auto">
                  <LessonControlButtons />
                </div>
              </div>
              <p className="mt-2 mb-0 ps-5">
                <span className="text-danger">Multiple Modules</span> |{" "}
                <strong>Not available until</strong> May 6 at 12:00 am |{" "}
                <strong>Due</strong> May 13 at 11:59pm | 100 pts
              </p>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <BsClipboardCheck className="me-3 fs-3 text-success" />
                <Link
                  to="/Kambaz/Courses/1234/Assignments/124"
                  className="wd-assignment-link text-decoration-none text-dark"
                >
                  <strong className="fs-5">A2</strong>
                </Link>
                <div className="ms-auto">
                  <LessonControlButtons />
                </div>
              </div>
              <p className="mt-2 mb-0 ps-5">
                <span className="text-danger">Multiple Modules</span> |{" "}
                <strong>Not available until</strong> May 13 at 12:00 am |{" "}
                <strong>Due</strong> May 20 at 11:59pm | 100 pts
              </p>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <BsClipboardCheck className="me-3 fs-3 text-success" />
                <Link
                  to="/Kambaz/Courses/1234/Assignments/125"
                  className="wd-assignment-link text-decoration-none text-dark"
                >
                  <strong className="fs-5">A3</strong>
                </Link>
                <div className="ms-auto">
                  <LessonControlButtons />
                </div>
              </div>
              <p className="mt-2 mb-0 ps-5">
                <span className="text-danger">Multiple Modules</span> |{" "}
                <strong>Not available until</strong> May 20 at 12:00 am |{" "}
                <strong>Due</strong> May 27 at 11:59pm | 100 pts
              </p>
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
{/* <AssignmentControls />
      <br />
      <ListGroup className="rounded-0" id="wd-assignments-list">
        <ListGroup.Item
          className="wd-assignment p-3 mb-4 border-start border-4 border-success"
        >
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-4 text-secondary" />
            <BsClipboardCheck className="me-3 fs-4 text-success" />
            <strong className="fs-5">A1 - ENV + HTML</strong>
            <div className="ms-auto">
              <LessonControlButtons />
            </div>
          </div>
          <p className="mt-2 mb-0 ps-5">
            <span className="text-danger">Multiple Modules</span> |{" "}
            <strong>Not available until</strong> May 6 at 12:00 am |{" "}
            <strong>Due</strong> May 13 at 11:59pm | 100 pts
          </p>
        </ListGroup.Item> */}