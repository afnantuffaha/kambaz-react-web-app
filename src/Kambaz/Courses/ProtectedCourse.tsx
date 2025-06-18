import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as userClient from "../Account/client";

export default function ProtectedCourse({ children }: { children: any }) {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [isEnrolled, setIsEnrolled] = useState<boolean | null>(null); // null = loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkEnrollment = async () => {
      if (!currentUser || !cid) {
        setIsEnrolled(false);
        setLoading(false);
        return;
      }

      console.log("=== ProtectedCourse Database Check ===");
      console.log("Current user:", currentUser);
      console.log("Course ID:", cid);

      try {
        // Faculty and Admin can access all courses
        if (currentUser.role === "FACULTY" || currentUser.role === "ADMIN") {
          console.log("User is faculty/admin, allowing access");
          setIsEnrolled(true);
          setLoading(false);
          return;
        }

        // Check enrollment through database
        console.log("Checking enrollment via database...");
        const enrolledCourses = await userClient.findCoursesForUser(currentUser._id);
        console.log("User's enrolled courses from database:", enrolledCourses);
        
        const enrolled = enrolledCourses.some((course: any) => course._id === cid);
        console.log("Is enrolled in this course:", enrolled);
        
        setIsEnrolled(enrolled);
      } catch (error) {
        console.error("Error checking enrollment:", error);
        setIsEnrolled(false);
      } finally {
        setLoading(false);
      }
    };

    checkEnrollment();
  }, [currentUser, cid]);

  if (!currentUser) {
    return (
      <div className="alert alert-warning m-4">
        <h4>Authentication Required</h4>
        <p>You must be signed in to access courses.</p>
        <button 
          className="btn btn-primary" 
          onClick={() => window.location.href = "#/Kambaz/Account/Signin"}
        >
          Sign In
        </button>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "400px" }}>
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">Checking course access...</p>
        </div>
      </div>
    );
  }

  if (!isEnrolled) {
    return (
      <div className="alert alert-info m-4">
        <h4>Enrollment Required</h4>
        <p>You must be enrolled in this course to access its content.</p>
        <div className="mt-3">
          <button 
            className="btn btn-primary me-2" 
            onClick={() => window.location.href = "#/Kambaz/Dashboard"}
          >
            Return to Dashboard
          </button>
          <button 
            className="btn btn-outline-secondary" 
            onClick={async () => {
              try {
                setLoading(true);
                await userClient.enrollIntoCourse(currentUser._id, cid!);
                // Recheck enrollment after enrolling
                const enrolledCourses = await userClient.findCoursesForUser(currentUser._id);
                const enrolled = enrolledCourses.some((course: any) => course._id === cid);
                setIsEnrolled(enrolled);
                setLoading(false);
              } catch (error) {
                console.error("Error enrolling:", error);
                alert("Error enrolling in course. Please try again.");
                setLoading(false);
              }
            }}
          >
            Enroll in Course
          </button>
        </div>
      </div>
    );
  }

  return children;
}