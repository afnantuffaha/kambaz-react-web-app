// src/kambaz/index.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import KambazNavigation from "./Navigation";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import ProtectedRoute from "./Account/ProtectedRoute";
import "./styles.css";
import AssignmentEditor from "./Courses/Assignments/Editor";
import ProtectedCourse from "./Courses/ProtectedCourse";
import Session from "./Account/Session";
import * as courseClient from "./Courses/client";
import * as userClient from "./Account/client";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setCourses as setCoursesInRedux } from "./Courses/reducer";

export default function Kambaz() {
  const [courses, setCourses] = useState<any[]>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();

  const fetchCourses = async () => {
    if (!currentUser) {
      setCourses([]);
      dispatch(setCoursesInRedux([]));
      return;
    }
    try {
      const courses = await userClient.findMyCourses();
      setCourses(courses);
      dispatch(setCoursesInRedux(courses));
    } catch (error) {
      console.error(error);
      setCourses([]);
      dispatch(setCoursesInRedux([]));
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [currentUser]);

  const addNewCourse = async (course: any) => {
    const newCourse = await userClient.createCourse(course);
    const updatedCourses = [...courses, newCourse];
    setCourses(updatedCourses);
    dispatch(setCoursesInRedux(updatedCourses));
  };

  const deleteCourse = async (courseId: string) => {
    const status = await courseClient.deleteCourse(courseId);
    const updatedCourses = courses.filter((course) => course._id !== courseId);
    setCourses(updatedCourses);
    dispatch(setCoursesInRedux(updatedCourses));
  };
   
  const updateCourse = async (course: any) => {
    await courseClient.updateCourse(course);
    const updatedCourses = courses.map((c) => {
      if (c._id === course._id) { return course; }
      else { return c; }
    });
    setCourses(updatedCourses);
    dispatch(setCoursesInRedux(updatedCourses));
  };

  return (
    <Session>
    <div id="wd-kambaz">
      <KambazNavigation />
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route 
            path="/Dashboard"
            element={
              <ProtectedRoute>
                <Dashboard 
                  courses={courses}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
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
    </Session>
  );
};