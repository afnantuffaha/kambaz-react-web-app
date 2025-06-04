// import { Routes, Route, Navigate }
//   from "react-router";
// import Account from "./Account";
// import Dashboard from "./Dashboard";
// import KambazNavigation from "./Navigation";
// import Courses from "./Courses";
// import AssignmentEditor from "./Courses/Assignments/Editor";
// import "./styles.css"
// import * as db from "./Database";
// import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
// import ProtectedRoute from "./Account/ProtectedRoute";

// export default function Kambaz() {
//   const [courses, setCourses] = useState<any[]>(db.courses);
//   const [course, setCourse] = useState<any>({
//     _id: "1234", name: "New Course", number: "New Number",
//     startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
//   });
//   const addNewCourse = () => {
//     setCourses([...courses, { ...course, _id: uuidv4() }]);
//   };
//   const deleteCourse = (courseId: any) => {
//     setCourses(courses.filter((course) => course._id !== courseId));
//   };
//   const updateCourse = () => {
//     setCourses(
//       courses.map((c) => {
//         if (c._id === course._id) {
//           return course;
//         } else {
//           return c;
//         }
//       })
//     );
//   };

//   return (
//     <div id="wd-kambaz">
//             <KambazNavigation />
//           <div className="wd-main-content-offset p-3">
//             <Routes>
//               <Route path="/" element={<Navigate to="Account" />} />
//               <Route path="/Account/*" element={<Account />} />
//               <Route path="/Dashboard" element={<ProtectedRoute><Dashboard
//               courses={courses}
//               course={course}
//               setCourse={setCourse}
//               addNewCourse={addNewCourse}
//               deleteCourse={deleteCourse}
//               updateCourse={updateCourse}/></ProtectedRoute>} />
//               <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses}/></ProtectedRoute>} />
//               <Route path="/Calendar" element={<h1>Calendar</h1>} />
//               <Route path="/Inbox" element={<h1>Inbox</h1>} />
//               <Route path="Assignments/:aid" element={<AssignmentEditor />} />
//             </Routes>
//             </div>
//     </div>
//   );}

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import KambazNavigation from "./Navigation";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import ProtectedRoute from "./Account/ProtectedRoute";
import "./styles.css";
import AssignmentEditor from "./Courses/Assignments/Editor";
import ProtectedCourse from "./Courses/ProtectedCourse";

export default function Kambaz() {
  return (
    <div id="wd-kambaz">
      <KambazNavigation />
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="Account" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route 
            path="/Dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/Courses/:cid/*" 
            element={
              <ProtectedRoute>
                <ProtectedCourse>
                <Courses />
                </ProtectedCourse>
              </ProtectedRoute>
            } 
          />
          <Route path="/Calendar" element={<h1>Calendar</h1>} />
          <Route path="/Inbox" element={<h1>Inbox</h1>} />
          <Route path="Assignments/:aid" element={<AssignmentEditor />} />
        </Routes>
      </div>
    </div>
  );
}