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
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setCourses as setCoursesInRedux } from "./Courses/reducer";
import ErrorBoundary from "./ErrorBoundary";

export default function Kambaz() {
  const [courses, setCourses] = useState<any[]>([]);
  const [enrolling, setEnrolling] = useState<boolean>(false);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();
  

  const findCoursesForUser = async () => {
   try {
     const courses = await userClient.findCoursesForUser(currentUser._id);
     setCourses(courses);
   } catch (error) {
     console.error(error);
   }
 };
 const updateEnrollment = async (courseId: string, enrolled: boolean) => {
   if (enrolled) {
     await userClient.enrollIntoCourse(currentUser._id, courseId);
   } else {
     await userClient.unenrollFromCourse(currentUser._id, courseId);
   }
   setCourses(
     courses.map((course) => {
       if (course._id === courseId) {
         return { ...course, enrolled: enrolled };
       } else {
         return course;
       }
     })
   );
 };

const fetchCourses = async () => {
  try {
    const allCourses = await courseClient.fetchAllCourses();
    const enrolledCourses = await userClient.findCoursesForUser(currentUser._id);
    
    console.log("All courses:", allCourses);
    console.log("Enrolled courses:", enrolledCourses);
    
    const courses = allCourses.map((course: any) => {
      // Safety check to ensure course and enrolledCourses exist
      if (!course || !course._id) return null;
      
      const isEnrolled = enrolledCourses && enrolledCourses.find((c: any) => c && c._id === course._id);
      return {
        ...course,
        enrolled: !!isEnrolled
      };
    }).filter(Boolean); // Remove null entries
    
    setCourses(courses);
  } catch (error) {
    console.error("Error in fetchCourses:", error);
    setCourses([]);
  }
};


useEffect(() => {
   if (enrolling) {
     fetchCourses();
   } else {
     findCoursesForUser();
   }
 }, [currentUser, enrolling]);

  const addNewCourse = async (course: any) => {
    const newCourse = await courseClient.createCourse(course);
    const updatedCourses = [...courses, newCourse];
    setCourses(updatedCourses);
    dispatch(setCoursesInRedux(updatedCourses));
  };

  const deleteCourse = async (courseId: string) => {
    await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
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
                <ErrorBoundary>
                <Dashboard 
                  courses={courses}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                  enrolling={enrolling}
                  setEnrolling={setEnrolling}
                  updateEnrollment={updateEnrollment}
                />
                </ErrorBoundary>
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