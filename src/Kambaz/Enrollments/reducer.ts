import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  enrollments: enrollments,
  showAllCourses: false
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enrollInCourse: (state, { payload: { userId, courseId } }) => {
      const newEnrollment = {
        _id: uuidv4(),
        user: userId,
        course: courseId
      };
      state.enrollments = [...state.enrollments, newEnrollment];
    },
    unenrollFromCourse: (state, { payload: { userId, courseId } }) => {
      state.enrollments = state.enrollments.filter(
        (enrollment: any) => !(enrollment.user === userId && enrollment.course === courseId)
      );
    },
    toggleShowAllCourses: (state) => {
      state.showAllCourses = !state.showAllCourses;
    }
  },
});

export const { enrollInCourse, unenrollFromCourse, toggleShowAllCourses } =
  enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;