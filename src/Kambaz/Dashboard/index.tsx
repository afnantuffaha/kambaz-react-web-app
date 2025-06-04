import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
import React, { useEffect } from "react";
import { addCourse, deleteCourse, updateCourse, setCourse } from "../Courses/reducer";
import { enrollInCourse, unenrollFromCourse, toggleShowAllCourses } from "../Enrollments/reducer";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { courses, course } = useSelector((state: any) => state.coursesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments, showAllCourses } = useSelector((state: any) => state.enrollmentsReducer);

  useEffect(() => {
    dispatch(setCourse({
      _id: "",
      name: "New Course",
      number: "New Number",
      startDate: new Date().toISOString().split('T')[0],
      endDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      image: "/images/reactjs.jpg",
      description: "New Description"
    }));
  }, [dispatch]);

  const handleAddCourse = () => {
    dispatch(addCourse(course));
    dispatch(setCourse({
      _id: "",
      name: "New Course",
      number: "New Number", 
      startDate: new Date().toISOString().split('T')[0],
      endDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      image: "/images/reactjs.jpg",
      description: "New Description"
    }));
  };

  const handleDeleteCourse = (courseId: string) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      dispatch(deleteCourse(courseId));
    }
  };

  const handleUpdateCourse = () => {
    dispatch(updateCourse(course));
  };

  const handleSetCourse = (courseToSet: any) => {
    dispatch(setCourse(courseToSet));
  };

  const handleToggleEnrollments = () => {
    dispatch(toggleShowAllCourses());
  };

  const handleEnroll = (courseId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(enrollInCourse({ userId: currentUser._id, courseId }));
  };

  const handleUnenroll = (courseId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(unenrollFromCourse({ userId: currentUser._id, courseId }));
  };

  const isEnrolled = (courseId: string) => {
    return enrollments.some((e: any) => e.user === currentUser?._id && e.course === courseId);
  };

  const canAccessCourse = (courseId: string) => {
    return currentUser?.role === "FACULTY" || isEnrolled(courseId);
  };

  const handleCourseNavigation = (courseId: string, e: React.MouseEvent) => {
    if (!canAccessCourse(courseId)) {
      e.preventDefault();
      alert("You must be enrolled in this course to access it.");
      return;
    }
  };

  const enrolledCourses = courses.filter((c: any) => isEnrolled(c._id));
  const displayedCourses = currentUser?.role === "FACULTY" ? courses : 
    (showAllCourses ? courses : enrolledCourses);
  
  return (
    <div id="wd-dashboard">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        
        {currentUser?.role !== "FACULTY" && (
          <Button 
            variant={showAllCourses ? "primary" : "outline-primary"}
            onClick={handleToggleEnrollments}
          >
            {showAllCourses ? "Show My Courses" : "Enrollments"}
          </Button>
        )}
      </div>
      <hr />
      
      {currentUser?.role === "FACULTY" && (
        <>
          <h5>New Course
              <button className="btn btn-primary float-end"
                      id="wd-add-new-course-click"
                      onClick={handleAddCourse} > Add </button>
                      <button className="btn btn-warning float-end me-2"
                    onClick={handleUpdateCourse} id="wd-update-course-click">
              Update
            </button>
          </h5><br />
          <FormControl 
            value={course?.name || ""} 
            placeholder="Course Name"
            className="mb-2"
            onChange={(e) => dispatch(setCourse({ ...course, name: e.target.value }))} 
          />
          <FormControl 
            value={course?.description || ""} 
            placeholder="Course Description"
            rows={3}
            as="textarea"
            onChange={(e) => dispatch(setCourse({ ...course, description: e.target.value }))}
          />
          <hr />
        </>
      )}
      
      <h2 id="wd-dashboard-published">
        {showAllCourses && currentUser?.role !== "FACULTY" ? "All Courses" : "Published Courses"} 
        ({displayedCourses.length})
      </h2> 
      <hr />
      
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {displayedCourses.map((course: any) => (
            <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link 
                  to={`/Kambaz/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  onClick={(e) => handleCourseNavigation(course._id, e)}
                >
                  <Card.Img 
                    src={course.image || "/images/reactjs.jpg"} 
                    variant="top" 
                    width="100%" 
                    height={160}
                    style={{ objectFit: "cover" }}
                    onError={(e) => {
                      e.currentTarget.src = "/images/reactjs.jpg";
                    }}
                  />
                  <Card.Body className="card-body">
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name}
                    </Card.Title>
                    <Card.Text 
                      className="wd-dashboard-course-description overflow-hidden" 
                      style={{ height: "100px" }}
                    >
                      {course.description}
                    </Card.Text>
                    
                    <div className="d-flex justify-content-between align-items-center">
                      <Button 
                        variant="primary"
                        disabled={!canAccessCourse(course._id)}
                      >
                        Go
                      </Button>
                      
                      <div className="d-flex gap-2">

                        {currentUser?.role !== "FACULTY" && showAllCourses && (
                          <>
                            {isEnrolled(course._id) ? (
                              <Button 
                                variant="danger" 
                                size="sm"
                                onClick={(e) => handleUnenroll(course._id, e)}
                              >
                                Unenroll
                              </Button>
                            ) : (
                              <Button 
                                variant="success" 
                                size="sm"
                                onClick={(e) => handleEnroll(course._id, e)}
                              >
                                Enroll
                              </Button>
                            )}
                          </>
                        )}
                        
                        {currentUser?.role === "FACULTY" && (
                          <>
                            <button 
                              onClick={(event) => {
                                event.preventDefault();
                                handleSetCourse(course);
                              }} 
                              className="btn btn-warning btn-sm"
                              id="wd-edit-course-click"
                            >
                              Edit
                            </button>
                            <button 
                              onClick={(event) => {
                                event.preventDefault();
                                handleDeleteCourse(course._id);
                              }} 
                              className="btn btn-danger btn-sm"
                              id="wd-delete-course-click"
                            >
                              Delete
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}