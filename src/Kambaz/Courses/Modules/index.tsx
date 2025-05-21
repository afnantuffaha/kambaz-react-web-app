// export default function Modules() {
//     return (
//       <div>
//         <div>
//           <button id="wd-collapse-all">Collapse All</button>
//           <button id="wd-view-progress">View Progress</button>
//           <select id="wd-publish">
//                     <option value="Publish All">Publish All</option>
//                     <option value="Public Current">Publish Current</option>
//                 </select>
//           <button id="wd-add-module">+ Module</button>
//         </div>
//         <ul id="wd-modules">
//           <li className="wd-module">
//             <div className="wd-title">Week 1</div>
//             <ul className="wd-lessons">
//               <li className="wd-lesson">
//                 <span className="wd-title">LEARNING OBJECTIVES</span>
//                 <ul className="wd-content">
//                   <li className="wd-content-item">Introduction to the course</li>
//                   <li className="wd-content-item">Learn what is Web Development</li>
//                 </ul>
//                 <span className="wd-title">READING</span>
//                 <ul className="wd-content">
//                   <li className="wd-content-item">Full Stack Developer - Chapter 1</li>
//                   <li className="wd-content-item">Full Stack Developer - Chapter 2</li>
//                 </ul>
//                 <span className="wd-title">SLIDES</span>
//                 <ul className="wd-content">
//                   <li className="wd-content-item">Introduction to Web Development</li>
//                   <li className="wd-content-item">Creating an HTTP server with Node.js</li>
//                   <li className="wd-content-item">Creating a React Application</li>
//                 </ul>
//               </li>
//             </ul>
//           </li>
//           <li className="wd-module">
//             <div className="wd-title">Week 2</div>
//             <ul className="wd-lessons">
//               <li className="wd-lesson">
//                 <span className="wd-title">LEARNING OBJECTIVES</span>
//                 <ul className="wd-content">
//                   <li className="wd-content-item">Learn CSS and Bootstrap</li>
//                   <li className="wd-content-item">Learn how to style web pages</li>
//                 </ul>
//                 <span className="wd-title">READING</span>
//                 <ul className="wd-content">
//                   <li className="wd-content-item">Full Stack Developer - Chapter 3</li>
//                   <li className="wd-content-item">Full Stack Developer - Chapter 4</li>
//                 </ul>
//                 <span className="wd-title">SLIDES</span>
//                 <ul className="wd-content">
//                   <li className="wd-content-item">Introduction to CSS</li>
//                   <li className="wd-content-item">Styling color and background color</li>
//                   <li className="wd-content-item">Styling dimensions and positions</li>
//                 </ul>
//               </li>
//             </ul>
//           </li>
//           <li className="wd-module">
//             <div className="wd-title">Week 3</div>
//             <ul className="wd-lessons">
//               <li className="wd-lesson">
//                 <span className="wd-title">LEARNING OBJECTIVES</span>
//                 <ul className="wd-content">
//                   <li className="wd-content-item">Learn JavaScript</li>
//                   <li className="wd-content-item">Learn how to create SPAs with React</li>
//                 </ul>
//                 <span className="wd-title">READING</span>
//                 <ul className="wd-content">
//                   <li className="wd-content-item">Full Stack Developer - Chapter 5</li>
//                   <li className="wd-content-item">Full Stack Developer - Chapter 6</li>
//                 </ul>
//                 <span className="wd-title">SLIDES</span>
//                 <ul className="wd-content">
//                   <li className="wd-content-item">Intro to JS</li>
//                   <li className="wd-content-item">Dynamic Styling</li>
//                   <li className="wd-content-item">Parameterizing Components</li>
//                 </ul>
//               </li>
//             </ul>
//           </li>
//         </ul>
//       </div>
//   );}
  
import { ListGroup } from "react-bootstrap";
import ModulesControls from "./ModuleControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";

export default function Modules() {
    return (
      <div>
  <ModulesControls /><br /><br /><br /><br />
  <ListGroup className="rounded-0" id="wd-modules">
    <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary"> 
      <BsGripVertical className="me-2 fs-3" />Week 1 <ModuleControlButtons/></div>
      <ListGroup className="wd-lessons rounded-0">
        <ListGroup.Item className="wd-lesson p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />
          LEARNING OBJECTIVES <LessonControlButtons/></ListGroup.Item>
        <ListGroup.Item className="wd-lesson p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />
          Introduction to the course<LessonControlButtons/> </ListGroup.Item>
        <ListGroup.Item className="wd-lesson p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />
          Learn what is Web Development <LessonControlButtons/></ListGroup.Item>
          <ListGroup.Item className="wd-lesson p-3 ps-1">
          <BsGripVertical className="me-2 fs-3" />
          READING<LessonControlButtons/> </ListGroup.Item>
        <ListGroup.Item className="wd-lesson p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />
          Full Stack Developer - Chapter 1 <LessonControlButtons/></ListGroup.Item>
        <ListGroup.Item className="wd-lesson p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />
        Full Stack Developer - Chapter 2 <LessonControlButtons/></ListGroup.Item>
      </ListGroup>
    </ListGroup.Item>
    <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary"> 
      <BsGripVertical className="me-2 fs-3" />Week 2 <ModuleControlButtons/></div>
      <ListGroup className="wd-lessons rounded-0">
      <ListGroup.Item className="wd-lesson p-3 ps-1">
      <BsGripVertical className="me-2 fs-3" />
          LEARNING OBJECTIVES <LessonControlButtons/></ListGroup.Item>
        <ListGroup.Item className="wd-lesson p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />
        Learn CSS and Bootstrap<LessonControlButtons/> </ListGroup.Item>
        <ListGroup.Item className="wd-lesson p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />
          Learn how to style web pages <LessonControlButtons/></ListGroup.Item>
          <ListGroup.Item className="wd-lesson p-3 ps-1">
          <BsGripVertical className="me-2 fs-3" />
          READING<LessonControlButtons/> </ListGroup.Item>
        <ListGroup.Item className="wd-lesson p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />
          Full Stack Developer - Chapter 3 <LessonControlButtons/></ListGroup.Item>
        <ListGroup.Item className="wd-lesson p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />
        Full Stack Developer - Chapter 4 <LessonControlButtons/></ListGroup.Item>
      </ListGroup>
    </ListGroup.Item>
  </ListGroup>
</div>

  );}
  