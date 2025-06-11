import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface Course {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  image: string;
  description: string;
}

interface CoursesState {
  courses: Course[];
  course: Course;
}

const initialState: CoursesState = {
  courses: [] as Course[],
  course: {
    _id: "",
    name: "New Course",
    number: "New Number",
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    image: "/images/reactjs.jpg",
    description: "New Description"
  }
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, { payload: courses }) => {
      state.courses = courses;
    },
    addCourse: (state, { payload: course }) => {
      console.log("Reducer adding course:", course);
      const newCourse: Course = {
        ...course,
        _id: uuidv4(),
        number: course.number || `CS${Math.floor(Math.random() * 9000) + 1000}`
      };
      state.courses = [...state.courses, newCourse];
      console.log("New courses array:", state.courses);
    },
    deleteCourse: (state, { payload: courseId }) => {
      console.log("Reducer deleting course:", courseId);
      state.courses = state.courses.filter(
        (c: Course) => c._id !== courseId);
    },
    updateCourse: (state, { payload: course }) => {
      console.log("Reducer updating course:", course);
      state.courses = state.courses.map((c: Course) =>
        c._id === course._id ? course : c
      );
    },
    setCourse: (state, { payload: course }) => {
      console.log("Reducer setting course:", course);
      state.course = course;
    },
  },
});

export const { addCourse, deleteCourse, updateCourse, setCourse, setCourses } =
  coursesSlice.actions;
export default coursesSlice.reducer;
