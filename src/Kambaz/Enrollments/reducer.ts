import { createSlice } from "@reduxjs/toolkit";

interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

interface EnrollmentsState {
  enrollments: Enrollment[];
  showAllCourses: boolean;
}

const initialState: EnrollmentsState = {
  enrollments: [] as Enrollment[],
  showAllCourses: false
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments: (state, action) => {
      state.enrollments = action.payload;
    },
    enrollInCourse: (state, { payload: enrollment }) => {
      const exists = state.enrollments.some(
        (e: Enrollment) => e.user === enrollment.user && e.course === enrollment.course
      );
      if (!exists) {
        state.enrollments = [...state.enrollments, enrollment];
      }
    },
    unenrollFromCourse: (state, { payload: { userId, courseId } }) => {
      state.enrollments = state.enrollments.filter(
        (enrollment: Enrollment) => !(enrollment.user === userId && enrollment.course === courseId)
      );
    },
    toggleShowAllCourses: (state) => {
      state.showAllCourses = !state.showAllCourses;
    }
  },
});

export const { setEnrollments, enrollInCourse, unenrollFromCourse, toggleShowAllCourses } =
  enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;