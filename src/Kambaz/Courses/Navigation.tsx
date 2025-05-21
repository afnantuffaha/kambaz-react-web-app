import { Link, useLocation } from "react-router-dom";

export default function CourseNavigation() {
  const location = useLocation(); 

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link
        to="/Kambaz/Courses/1234/Home"
        id="wd-course-home-link"
        className={`list-group-item border border-0 ${
          location.pathname === "/Kambaz/Courses/1234/Home" ? "active bg-white text-black" : "text-danger"
        }`}
      >
        Home
      </Link>
      <Link
        to="/Kambaz/Courses/1234/Modules"
        id="wd-course-modules-link"
        className={`list-group-item border border-0 ${
          location.pathname === "/Kambaz/Courses/1234/Modules" ? "active bg-white text-black" : "text-danger"
        }`}
      >
        Modules
      </Link>
      <Link
        to="/Kambaz/Courses/1234/Piazza"
        id="wd-course-piazza-link"
        className={`list-group-item border border-0 ${
          location.pathname === "/Kambaz/Courses/1234/Piazza" ? "active bg-white text-black" : "text-danger"
        }`}
      >
        Piazza
      </Link>
      <Link
        to="/Kambaz/Courses/1234/Zoom"
        id="wd-course-zoom-link"
        className={`list-group-item border border-0 ${
          location.pathname === "/Kambaz/Courses/1234/Zoom" ? "active bg-white text-black" : "text-danger"
        }`}
      >
        Zoom
      </Link>
      <Link
        to="/Kambaz/Courses/1234/Assignments"
        id="wd-course-assignments-link"
        className={`list-group-item border border-0 ${
          location.pathname === "/Kambaz/Courses/1234/Assignments" ? "active bg-white text-black" : "text-danger"
        }`}
      >
        Assignments
      </Link>
      <Link
        to="/Kambaz/Courses/1234/Quizzes"
        id="wd-course-quizzes-link"
        className={`list-group-item border border-0 ${
          location.pathname === "/Kambaz/Courses/1234/Quizzes" ? "active bg-white text-black" : "text-danger"
        }`}
      >
        Quizzes
      </Link>
      <Link
        to="/Kambaz/Courses/1234/People"
        id="wd-course-people-link"
        className={`list-group-item border border-0 ${
          location.pathname === "/Kambaz/Courses/1234/People" ? "active bg-white text-black" : "text-danger"
        }`}
      >
        People
      </Link>
    </div>
  );
}